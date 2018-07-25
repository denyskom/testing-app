import React, { Component } from 'react';
import './List.css'



const activityCard = (props) => {
    let activity = props.activity;
    let URL = `${props.activityURL}/${activity._id}`;

    return (
        <div className="activity-card">
            <div className="activity-item">
                <h2><a href={URL}>{activity.title}</a></h2>
            </div>
            <div className="activity-item">
                <p>{activity.description}</p>
            </div>
            <div className="activity-item">
                <img src={activity.imageURL}/>
            </div>
            <a href={URL} className="btn btn-info">Читати далі</a>
        </div>
    )


};

export default activityCard;

