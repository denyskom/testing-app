import React, { Component } from 'react';
import axios from 'axios';
import Task from "../Selection/Task";
import './FullActivity.css'

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
            console.log(`${activityServerURL}/${this.state.activityId}`);
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