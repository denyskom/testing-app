import React, { Component } from 'react';
import axios from 'axios';

const task = (props) => {
    let task = props.task;

    return(
        <div className="activity-task card border-success" style={{display:task.isAvailable?"inherit":"none"}}>
            <div className="card-header bg-transparent border-success">{props.activity}</div>
            <div className="card-body text-dark">
                <h3 className="card-title">{task.title}</h3>
                <p className="card-text">{task.description}</p>
                <a href={task.additionalInfo}>Додаткова інформація</a>
            </div>
            <div className="card-footer bg-transparent border-success">
                <form>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Link"
                               aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button">Надіслати</button>
                            </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default task;
