import React from 'react';
import './List.css'
import ButtonWithMassage from "../Collapsible/ButtonWithMassage";
import { Link } from 'react-router-dom'
import routes from '../Main/Routes';



// import Checked from '../../node_modules/react-icons/lib/md/check-circle'


const invisibleElement = "invisible";


const activityCard = (props) => {
    let activity = props.activity;
    let URL = `${props.activityURL}/${activity._id}`;

    let renderButton = () => {
        if (props.isAuth && props.buttonNeeded){
            return <button onClick={props.registrationHandler}
                           className={props.isActive?"btn btn-info":invisibleElement}>Зареєструватися</button>;
        }

        if(!props.isAuth) {
            return <ButtonWithMassage className={props.isActive?"btn btn-info":invisibleElement} textclass="warning"
                                      title="Зареєструватися" massage={
                <span style={{marginLeft:"4px"}}>
                                               Для реєстрації вам потрібно
                                               <Link style={{color: "rgb(23, 162, 184)"}}
                                                     to={`../../${routes.appLoginRelative}`}> Увійти </Link> або
                                               <Link style={{color: "rgb(23, 162, 184)"}}
                                                     to={`../../${routes.appRegistrationRelative}`}> Створити </Link>
                                               новий аккаунт.
                                           </span>}/>
        }
        return "";
        {/*<Checked size={40} className="checked-glyph"/>;*/}
    };

    return (
        <div key={props.key} className="activity-card">
            <div className="activity-item">
                <h2><Link to={URL}>{activity.title}</Link></h2>
            </div>
            <div style={{textAlign: "left"}} className="activity-item">
                <p>{activity.description}</p>
            </div>
            <div className="activity-item">
                <img src={activity.imageURL}/>
            </div>
            <div className="button-line">
                <Link to={URL} className={props.readMore?"btn btn-info":"invisible"}>Читати далі</Link>
                {renderButton()}
            </div>
        </div>
    )


};

export default activityCard;

