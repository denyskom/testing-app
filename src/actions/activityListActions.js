import axios from '../config/axios';
import {GET_ERRORS, LOAD_ACTIVITIES_LIST} from './types';
import routes from '../components/Main/Routes';


export const loadActivities = () => dispatch => {
    axios.get(routes.serverActivities)
        .then(response => {
            console.log('downloaded');
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
