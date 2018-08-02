import {SUBMIT_BUTTON} from "../actions/types";

export default (state = 0, action) => {
    switch (action.type) {
        case SUBMIT_BUTTON:
            return state + 1;
        default :
            return state;
    }
}