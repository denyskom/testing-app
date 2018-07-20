import React, { Component } from 'react';
import axios from 'axios';
import ActivityCard from "./ActivityCard";
import './List.css'

const activityURL = "http://localhost:3004/activities";

class ActivityPresentationList extends Component {
    constructor(props){
        super(props);
        this.state= {
            activities:[],
            isLoaded:false
        }
    }


    componentDidMount() {
        axios.get(activityURL).then(response => {
            let activities = response.data;
            activities.reverse();
            this.setState({activities:activities,isLoaded:true})
        })
    }

    renderActivities = () => {
        return this.state.activities.map(activity => {
            return <ActivityCard key={activity.id}
                                 title={activity.title}
                                 description={activity.description}
                                 imageURL={activity.imageURL}/>
        })
    };

    render() {
        if(!this.state.isLoaded) {
            return(<div className="loader"></div>)
        }

        return(
            <div className="list-container">
                {this.renderActivities()}
            </div>
        )
    }

}

export default ActivityPresentationList;