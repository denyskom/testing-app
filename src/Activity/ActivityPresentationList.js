import React, { Component } from 'react';
import axios from 'axios';
import ActivityCard from "./ActivityCard";
import './List.css'

const activityServerURL = "http://localhost:3004/activities";
const activityURL = "http://localhost:3000/home/activities";
const participateURL = "http://localhost:3004/participate";

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
            activities.reverse();
            this.setState({activities:activities,isLoaded:true})
        })
    }

    renderActivities = () => {
        return this.state.activities.map(activity => {
            return <ActivityCard key={activity.id}
                                 activity={activity}
                                 activityURL={activityURL}
                                 buttonNeeded={activity.persons.indexOf(this.getCurrentUserId()) === -1}
                                 isActive={this.checkExpiration(activity)}
                                 isAuth={this.checkIfUserAuth()}
                                 registrationHandler={() => this.registrationHandler(activity)}

            />
        })
    };

    registrationHandler = (activity) => {
        axios.post(participateURL,{
            ...activity,
            personId: this.getCurrentUserId()
        })
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