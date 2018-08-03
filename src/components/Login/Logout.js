import React from 'react';
import {Redirect} from 'react-router-dom';
import {logOutUser} from "../../actions/authActions";
import {setAuthToken} from '../../config/axios';
import store from "../../store";


import './LoginMarker.css'
const defaultImage = "https://ppgzone-39u4nsxgmu93y.netdna-ssl.com/wp-content/uploads/batman-profile-pic.jpg";



const logout = () => {
    store.dispatch(logOutUser());
    return(
         <Redirect to='../../'/>
    )
};

export default logout;