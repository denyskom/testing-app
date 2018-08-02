import axios from 'axios';
import {GET_ERRORS} from './types';
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
        const token = res.data.token;
            localStorage.setItem('jwtToken', res.data.token);

        }
    )
};