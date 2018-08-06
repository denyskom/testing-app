import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer'
import activityReducer from './activitiesReducer'


export default combineReducers({
    auth:authReducer,
    errors:errorReducer,
    activities: activityReducer
});