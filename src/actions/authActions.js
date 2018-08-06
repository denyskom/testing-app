import axios, {setAuthToken} from '../config/axios';
import {GET_ERRORS, REMOVE_ERRORS, SET_CURRENT_USER, REMOVE_CURRENT_USER} from './types';
import jwt_decode from 'jwt-decode';
import routes from '../components/Main/Routes';
import decodeCurrentUser from '../utils/decodeCurrentUser'





export const registerUser = (userData) => dispatch => {
    axios.post(routes.serverRegistration, userData)
        .then(() => {
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
            setAuthToken(res.data.token);
        dispatch ({
                type:SET_CURRENT_USER,
                payload: {
                    isAuthenticated: true,
                    user:{
                        ...decoded,
                        ...res.data.user
                    }
                }
        })}
    ).catch(err => dispatch({
        type: GET_ERRORS,
        payload: err.response.data
    }))
};

export const loadCurrentUser = () => dispatch => {
    let decodedUser = decodeCurrentUser();
    axios.get(`${routes.serverPeople}/${decodedUser.id}`).then(res => {
        dispatch ({
            type:SET_CURRENT_USER,
            payload: {
                isAuthenticated: true,
                user:{
                    ...decodedUser,
                    ...res.data
                }
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