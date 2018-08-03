import React from 'react'
import './MiniActivity.css'
import { Link } from 'react-router-dom'
import routes from '../Main/Routes';
const activityURL = routes.appActivities;


const miniActivity = (props) => {
    let activity = props.activity;

    return(
        <div className={`min-activity card ${activity.isActive?"border-success":"border-secondary"}`}>
            <div className="card-header"><Link to={`${activityURL}/${activity.id}`}><h4>{activity.title}</h4></Link></div>
            <div className="card-body text-dark">
                <p className="card-text">{activity.description}</p>
            </div>
        </div>
    )
};
export default miniActivity;
