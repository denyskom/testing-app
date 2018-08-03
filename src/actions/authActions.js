import axios, {setAuthToken} from '../config/axios';
import {GET_ERRORS, REMOVE_ERRORS, SET_CURRENT_USER, REMOVE_CURRENT_USER} from './types';
import jwt_decode from 'jwt-decode';
import routes from '../Main/Routes';




export const registerUser = (userData) => dispatch => {
    axios.post(routes.serverRegistration, userData)
        .then(res => {
            dispatch(loginUser({email:userData.email, password:userData.password},dispatch({type:REMOVE_ERRORS})
            ));
        })
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
};

export const loginUser = (userData) => dispatch => {
    axios.post(routes.serverLogin, userData).then(res => {
            localStorage.setItem('jwtToken', res.data.token);
            const decoded =jwt_decode(res.data.token);
        localStorage.setItem('id', decoded.id);
            localStorage.setItem('img', decoded.photo);
            setAuthToken(res.data.token);
        dispatch ({
                type:SET_CURRENT_USER,
                payload: {
                    isAuthenticated: true,
                    user:decoded
                }
        })}
    ).catch(err => dispatch({
        type: GET_ERRORS,
        payload: err.response.data
    }))
};


export const logOutUser = () => {
    localStorage.removeItem('id');
    localStorage.removeItem('jwtToken');
    setAuthToken({});
    return({
        type: REMOVE_CURRENT_USER,
    })
};