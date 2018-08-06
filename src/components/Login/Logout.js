import React from 'react';
import {Redirect} from 'react-router-dom';
import {logOutUser} from "../../actions/authActions";
import store from "../../store";


import './LoginMarker.css'



const logout = () => {
    store.dispatch(logOutUser());
    return(
         <Redirect to='../../'/>
    )
};

export default logout;