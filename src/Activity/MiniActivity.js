import React, { Component } from 'react'
import './MiniActivity.css'
const activityURL = "http://localhost:3000/home/activities";

const miniActivity = (props) => {
    let activity = props.activity;

    return(
        <div className={`min-activity card ${activity.isActive?"border-success":"border-secondary"}`}>
            <div className="card-header"><a href={`${activityURL}/${activity.id}`}><h4>{activity.title}</h4></a></div>
            <div className="card-body text-dark">
                <p className="card-text">{activity.description}</p>
            </div>
        </div>
    )
};
export default miniActivity;
