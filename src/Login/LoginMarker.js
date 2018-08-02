import React from 'react';
import Enter from '../../node_modules/react-icons/lib/md/exit-to-app'
import { Link } from 'react-router-dom'
import './LoginMarker.css'
const defaultImage = "https://ppgzone-39u4nsxgmu93y.netdna-ssl.com/wp-content/uploads/batman-profile-pic.jpg";

const routes = require('../Main/Routes');

const loginMarker = (props) => {
    return(
        <div>
            <div className={props.isLogged?"marker-inner":"invisible"}>
                <Link to={`../../${routes.appPeopleRelative}`}>
                    <img src={localStorage.getItem('img')}/>
                </Link>
                <Link to={`../../${routes.appLogoutRelative}`} className="head-link">Вийти</Link>
            </div>
            <div className={!props.isLogged?"marker-inner":"invisible"}>
                <Enter size={26} className="enter-glyph"/>
                <Link to={`../../${routes.appLoginRelative}`}  className="head-link">Увійти</Link>
            </div>
        </div>
    )
};

export default loginMarker;
