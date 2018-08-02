import {combineReducers} from 'redux';


import {reducer as formReducer} from 'redux-form'
import submitReducer from "./submitReducer";

const rootReducer = combineReducers({
    form: formReducer,
    submit: submitReducer
});

export default rootReducer;