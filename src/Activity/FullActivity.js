import React, { Component } from 'react';
import axios from 'axios';
import Task from "../Tasks/Task";
import './FullActivity.css'
import CollapsibleButton from "../Collapsible/CollapsibleButton";
import CommentsSection from "./Comments/CommentsSection";
import ActivityCard from "./ActivityCard";

const activityServerURL = "http://localhost:3004/activities";
const stagesServerURL = "http://localhost:3004/stages";
const participateURL = "http://localhost:3004/participate";
const activityURL = "http://localhost:3000/home/activities";


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
        axios.patch(participateURL,
            {
                activityId:this.state.activity._id,
                userId: this.getCurrentUserId(),
            })
    };

    getCurrentUserId = () => {
        return localStorage.getItem('id');
    };

    checkIfUserAuth = () => {
        return !!localStorage.getItem('id');
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
        axios.post(participateURL,{
            ...activity,
            personId: this.getCurrentUserId()
        })
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
        if(!this.state.isLoaded) {
            return(<div className="loader"> </div>)
        }

        return(this.renderFullActivity());
    }
}

export default FullActivity;