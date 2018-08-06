import React, { Component } from 'react';
import axios  from '../../config/axios';
import ActivityCard from './ActivityCard';
import './List.css'
import {Redirect} from 'react-router-dom';
import routes from '../Main/Routes';
import {connect} from "react-redux";
import isEmpty from '../../utils/isEmpty';
import {loadCurrentUser} from '../../actions/authActions'

const activityURL = routes.appActivities;
const serverActivityURL = routes.serverActivity;

class ActivityPresentationList extends Component {
    constructor(props){
        super(props);
        this.state= {
            activities:[],
            isLoaded:false,
            redirect:false
        }
    }


    componentDidMount() {
        if (isEmpty(this.state.activities) && this.props.activities.isLoaded) {
                    this.setState({
                        activities: this.props.activities.activities,
                        isLoaded: true
                    })
                }
    }

    componentWillReceiveProps(nextProps) {
        if (isEmpty(this.state.activities)) {
            this.setState({activities:nextProps.activities.activities, isLoaded: true})
        }
    }


    renderActivities = () => {
        return this.state.activities.map(activity => {
            return <ActivityCard key={activity.id}
                                 activity={activity}
                                 activityURL={activityURL}
                                 readMore={true}
                                 buttonNeeded={activity.persons.indexOf(this.getCurrentUserId()) === -1}
                                 isActive={this.checkExpiration(activity)}
                                 isAuth={this.checkIfUserAuth()}
                                 registrationHandler={() => this.registrationHandler(activity)}

            />
        })
    };

    registrationHandler = (activity) => {
        let activityId = activity._id;
        this.setState({isLoaded:false});
        axios.put(`${serverActivityURL}/${activityId}/user/${this.getCurrentUserId()}`,{
            ...activity,
            personId: this.getCurrentUserId()
        }).then(() => this.setState({activityId:activityId},() =>{
            this.props.loadCurrentUser();
            this.setState({redirect:true, isLoaded:true})}));
    };

    checkExpiration = (activity) => {
        return  Date.parse(activity.registrationEndDate) > Date.now().valueOf();
    };

    checkIfUserAuth = () => {
        return this.props.auth.isAuthenticated;
    };

    getCurrentUserId = () => {
        return this.props.auth.user.id
    };


    render() {

        if(this.state.redirect) {
            return <Redirect to={`../../${routes.appActivitiesRelative}/${this.state.activityId}`}/>
        }

        if(!this.state.isLoaded) {
            return(<div className="loader"> </div>)
        }

        return(
            <div className="list-container">
                {this.renderActivities()}
            </div>
        )
    }

}

const mapStateToProps = state => ({
    auth:state.auth,
    errors: state.errors,
    activities:state.activities,
});

export default connect(mapStateToProps,{loadCurrentUser})(ActivityPresentationList);