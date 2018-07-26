import React from 'react';
import Enter from '../../node_modules/react-icons/lib/md/exit-to-app'
import './LoginMarker.css'
const defaultImage = "https://ppgzone-39u4nsxgmu93y.netdna-ssl.com/wp-content/uploads/batman-profile-pic.jpg";



const loginMarker = (props) => {
    return(
        <div>
            <div className={props.isLogged?"marker-inner":"invisible"}>
                <a href="../../home/people">
                    <img src={localStorage.getItem('img')}/>
                </a>
                <a href='../../index/logout' className="head-link">Вийти</a>
            </div>
            <div className={!props.isLogged?"marker-inner":"invisible"}>
                <Enter size={26} className="enter-glyph"/>
                <a href='../../index/login' className="head-link">Увійти</a>
            </div>
        </div>
    )
};

export default loginMarker;
