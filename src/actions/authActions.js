import axios from '../config/axios';
import {GET_ERRORS, SET_CURRENT_USER, REMOVE_CURRENT_USER} from './types';
const jwtDecode = require('jwt-decode');
const routes = require('../Main/Routes');




export const registerUser = (userData, history) => dispatch => {
    axios.post(routes.serverRegistration, userData)
        .then(res => dispatch(loginUser({email:userData.email, password:userData.password})))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
};

export const loginUser = (userData, history) => dispatch => {
    axios.post(routes.serverLogin, userData).then(res => {
            console.log(res.data.user);
            localStorage.setItem('jwtToken', res.data.token);
            localStorage.setItem('id', res.data.user._id);
            localStorage.setItem('img', res.data.user.photo);
            axios.defaults.headers.common['Authorization'] = res.data.token;

        dispatch ({
                type:SET_CURRENT_USER,
                payload: {
                    isAuthenticated: true,
                    user:res.data.user
                }
        })}
    ).catch(err => dispatch({
        type: GET_ERRORS,
        payload: err.response.data
    }))
};

export const logOutUser = () => {
    return({
        type: REMOVE_CURRENT_USER,
    })
};