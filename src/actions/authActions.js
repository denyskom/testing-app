import axios from 'axios';
import {GET_ERRORS, SET_CURRENT_USER} from './types';
const jwtDecode = require('jwt-decode');
const routes = require('../Main/Routes');




export const registerUser = (userData, history) => dispatch => {
    axios.post(routes.serverRegistration, userData)
        .then(res => history.push(routes.appLogin))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
};

export const loginUser = userData => dispatch => {
    axios.post(routes.serverLogin, userData).then(res => {
            localStorage.setItem('jwtToken', res.data.token);
            localStorage.setItem('id', res.data.user._id);
            localStorage.setItem('img', res.data.user.photo);
            dispatch ({
                type:SET_CURRENT_USER,
                isAuthenticated: true,
                user:res.data.user
        }).catch(err => dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            }))

        }
    )
};