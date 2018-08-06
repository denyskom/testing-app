import React from 'react';
import Enter from '../../../node_modules/react-icons/lib/md/exit-to-app'
import { Link } from 'react-router-dom'
import './LoginMarker.css'
import routes from '../Main/Routes';
import {logOutUser} from "../../actions/authActions";
import store from "../../store";


const loginMarker = (props) => {
    const logOutHandler = (event) => {
        event.preventDefault();
        store.dispatch(logOutUser());
    };
    return(
        <div>
            <div className={props.isLogged?"marker-inner":"invisible"}>
                <Link to={`../../${routes.appProfileRelative}`}>
                    <img src={props.avatar}/>
                </Link>
                <Link onClick={logOutHandler} to={`../../${routes.appLogoutRelative}`} className="head-link">Вийти</Link>
            </div>
            <div className={!props.isLogged?"marker-inner":"invisible"}>
                <Enter size={26} className="enter-glyph"/>
                <Link to={`../../${routes.appLoginRelative}`}  className="head-link">Увійти</Link>
            </div>
        </div>
    )
};

export default loginMarker;
