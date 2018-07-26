import React, { Component } from 'react';
import axios from 'axios';
import Task from "../Tasks/Task";
import './FullActivity.css'
import CollapsibleButton from "../Collapsible/CollapsibleButton";

const activityServerURL = "http://localhost:3004/activities";
const stagesServerURL = "http://localhost:3004/stages";


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

    renderFullActivity = () => {
        let activity = this.state.activity;
        return (
            <div>
                <h2>{activity.title}</h2>
                <CollapsibleButton title="Детальніше">{activity.description}</CollapsibleButton>
                {this.renderTasks()}
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