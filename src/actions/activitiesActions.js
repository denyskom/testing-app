import axios from '../config/axios';
import {GET_ERRORS, LOAD_ACTIVITIES_LIST} from './types';
import routes from '../components/Main/Routes';
import decodeCurrentUser from '../utils/decodeCurrentUser'
import {loadCurrentUser} from "./authActions";


export const loadActivities = () => dispatch => {
    axios.get(routes.serverActivities)
        .then(response => {
            dispatch({
                type: LOAD_ACTIVITIES_LIST,
                payload: response.data
            });
        })
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }));
};

export const registerCurrentUser = (activity) => dispatch => {
    let user = decodeCurrentUser();
    axios.put(`${routes.serverActivity}/${activity._id}/user/${user.id}`,{
        ...activity,
        personId: user.id,
    })
        .then(() => {
            dispatch(loadCurrentUser(),
                dispatch(loadActivities())
                )})
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }));
};
