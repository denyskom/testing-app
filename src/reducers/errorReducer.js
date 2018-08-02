import {GET_ERRORS} from "../actions/types"

const initState = {};

export default function(prevState = initState, action) {
    switch (action.type) {
        case GET_ERRORS:
            return action.payload;

        default: return prevState;
    }
};
