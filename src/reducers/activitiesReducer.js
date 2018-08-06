import {LOAD_ACTIVITIES_LIST} from "../actions/types";

const initialState = {
    activities: [],
    isLoaded:false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case LOAD_ACTIVITIES_LIST:
            return {
                ...state,
                activities: action.payload,
                isLoaded: true
            };
        default:
            return state;
    }
}