import React, { Component } from 'react';
import './List.css'



const activityCard = (props) => {
    return (
        <div className="activity-card">
            <div className="activity-item">
                <h2><a href="#">{props.title}</a></h2>
            </div>
            <div className="activity-item">
                <p>{props.description}</p>
            </div>
            <div className="activity-item">
                <img src={props.imageURL}/>
            </div>
            <button type="button" className="btn btn-info">Читати далі</button>
        </div>
    )


};

export default activityCard;

