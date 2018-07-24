import React from 'react';
import {Redirect} from 'react-router-dom';
import './LoginMarker.css'
const defaultImage = "https://ppgzone-39u4nsxgmu93y.netdna-ssl.com/wp-content/uploads/batman-profile-pic.jpg";



const logout = () => {
    localStorage.removeItem('id');
    return(
         <Redirect to='../../'/>
    )
};

export default logout;