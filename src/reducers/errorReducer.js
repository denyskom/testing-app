import {GET_ERRORS, REMOVE_ERRORS} from "../actions/types"

const initState = {};

export default function(prevState = initState, action) {
    switch (action.type) {
        case GET_ERRORS:
            return action.payload;
        case REMOVE_ERRORS:
            return {};

        default: return prevState;
    }
};
