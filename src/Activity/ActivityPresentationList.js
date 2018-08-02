import React, { Component } from 'react';
import axios  from '../config/axios';
import ActivityCard from "./ActivityCard";
import './List.css'
import {Redirect} from 'react-router-dom';


const routes = require('../Main/Routes');
const activityServerURL = routes.serverActivities;
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
        axios.get(activityServerURL).then(response => {
            let activities = response.data;
            this.setState({activities:activities,isLoaded:true})
        })
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
        }).then(() => this.setState({activityId:activityId},() => this.setState({redirect:true, isLoaded:true})));
    };

    checkExpiration = (activity) => {
        return  Date.parse(activity.registrationEndDate) > Date.now().valueOf();
    };

    checkIfUserAuth = () => {
        return !!localStorage.getItem('id');
    };

    getCurrentUserId = () => {
        return localStorage.getItem('id');
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

export default ActivityPresentationList;