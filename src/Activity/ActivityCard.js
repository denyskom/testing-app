import React from 'react';
import './List.css'
import ButtonWithMassage from "../Collapsible/ButtonWithMassage";

const invisibleElement = "invisible";



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
            <div className="button-line">
                <a href={URL} className="btn btn-info">Читати далі</a>
                {props.isAuth?
                    <button className={props.isActive?"btn btn-info":invisibleElement}>Зареєструватися</button>:
                    <ButtonWithMassage className={props.isActive?"btn btn-info":invisibleElement} textClass="warning"
                                       title="Зареєструватися" massage={
                                           <span>
                                               Для реєстрації вам потрібно
                                               <a style={{color: "rgb(23, 162, 184)"}} href="../../index/login"> Увійти </a> або
                                               <a style={{color: "rgb(23, 162, 184)"}} href="../../index/registration"> Зареєструватися </a>
                                           </span>}/>}
            </div>
        </div>
    )


};

export default activityCard;

