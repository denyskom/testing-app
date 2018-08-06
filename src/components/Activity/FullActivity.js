import React, { Component } from 'react';
import axios  from '../../config/axios';
import Task from "../Tasks/Task";
import './FullActivity.css'
import CollapsibleButton from "../Collapsible/CollapsibleButton";
import CommentsSection from "./Comments/CommentsSection";
import ActivityCard from "./ActivityCard";
import {Redirect} from 'react-router-dom';
import routes from '../Main/Routes';
import {connect} from "react-redux";
import {loadCurrentUser} from '../../actions/authActions'


const activityServerURL = routes.serverActivities;
const stagesServerURL = routes.serverStages;
const serverActivityURL = routes.serverActivity;
const activityURL = routes.appActivities;



class FullActivity extends Component {
    constructor(props){
        super(props);
        this.state= {
            tasks:[],
            activity: {},
            activityId:this.props.match.params.id,
            isActivityLoaded:false,
            isLoaded:false
        }
    }

    componentDidMount() {
        if(!this.state.isLoaded) {
            axios.get(`${activityServerURL}/${this.state.activityId}`).then(response => {
                let activity = response.data;
                this.setState({activity:activity,isActivityLoaded:true}
            )}).then(() => {
                    if(this.state.isActivityLoaded){
                        axios.get(`${stagesServerURL}/${this.state.activityId}`)
                            .then(resp => this.setState({tasks:resp.data, isLoaded:true}));
                    }
                });
        }
    }

    deleteActivity = () => {
        let activityId = this.state.activityId;
        this.setState({isLoaded:false});
        axios.delete(`${serverActivityURL}/${activityId}/user/${this.getCurrentUserId()}`)
            .then(() =>  {
                this.props.loadCurrentUser();
                this.componentDidMount()
            });
    };

    getCurrentUserId = () => {
        return this.props.auth.user.id
    };

    checkIfUserAuth = () => {
        return this.props.auth.isAuthenticated;
    };

    checkExpiration = (activity) => {
        return  Date.parse(activity.registrationEndDate) > Date.now().valueOf();
    };

    checkIfRegistredForActivity = () => {
    if(this.checkIfUserAuth) {
        return this.state.activity.persons.indexOf(this.getCurrentUserId()) === -1;
    }
    return false;
};


    renderActivityForIntern = () => {
        let activity = this.state.activity;

        return <div>
                 <h2>{activity.title}</h2>
                 <CollapsibleButton title="Детальніше">{activity.description}</CollapsibleButton>
                 {this.renderTasks()}
                  <div className="left-button">
                    <button type="button" onClick={this.deleteActivity} className="btn btn-outline-danger">Видалити</button>
                  </div>
                   <hr/>
              </div>
    };

    registrationHandler = (activity) => {
        let activityId = activity._id;
        this.setState({isLoaded:false});
        axios.put(`${serverActivityURL}/${activityId}/user/${this.getCurrentUserId()}`,{
            ...activity,
            personId: this.getCurrentUserId()
        }).then(() =>  {
            this.props.loadCurrentUser();
            this.componentDidMount()});
    };

    renderActivityForNonAuth = () => {
        let activity = this.state.activity;

        return <ActivityCard
                      activity={activity}
                      activityURL={activityURL}
                      buttonNeeded={activity.persons.indexOf(this.getCurrentUserId()) === -1}
                      readMore={false}
                      isActive={this.checkExpiration(activity)}
                      isAuth={this.checkIfUserAuth()}
                      registrationHandler={() => this.registrationHandler(activity)}/>

    };

    renderCard = () => {
        if(!this.checkIfRegistredForActivity()) {
            return this.renderActivityForIntern();
        }
        return this.renderActivityForNonAuth();
    };


    renderFullActivity = () => {
        return (
            <div>
                {this.renderCard()}
                <CommentsSection label="Коментарі:" buttonName="Надіслати"/>
            </div>
        );
    };

    renderTasks =  () => {
           return(
               <div>
                   {this.state.tasks.map(task => {
                       return(<Task task={task}
                       activity={this.state.activity.title}/>)
                   })}
               </div>
           )
};

    render() {

        if(this.state.redirect) {
            return <Redirect to={`../../${routes.appActivitiesRelative}/${this.state.activity._id}`}/>
        }

        if(!this.state.isLoaded) {
            return(<div className="loader"> </div>)
        }

        return(this.renderFullActivity());
    }
}

const mapStateToProps = state => ({
    auth:state.auth,
    errors: state.errors
});

export default connect(mapStateToProps,{loadCurrentUser})(FullActivity);