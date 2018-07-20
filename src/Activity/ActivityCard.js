import React, { Component } from 'react';
import './List.css'



const activityCard = (props) => {
    return (
        <div className="activity-card">
            <div className="activity-item">
                <h2><a href={props.URL}>{props.title}</a></h2>
            </div>
            <div className="activity-item">
                <p>{props.description}</p>
            </div>
            <div className="activity-item">
                <img src={props.imageURL}/>
            </div>
            <a href={props.URL} className="btn btn-info">Читати далі</a>
        </div>
    )


};

export default activityCard;

