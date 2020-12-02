import { combineReducers } from 'redux';
import {
    REQUEST_FINALUSERDATA,
    RECEIVE_FINALUSERDATA,
    RECEIVE_FINALUSERDATA_ERROR,

} from './constants/ActionTypes';


//Use Info
export function finalUserData(
    state = {
        isFetching: false,
        userData: {},
    },
    action
) {
    switch (action.type) {
        case REQUEST_FINALUSERDATA:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case RECEIVE_FINALUSERDATA:
            return Object.assign({}, state, {
                isFetching: false,
                userData: action.userData,
            });
        case RECEIVE_FINALUSERDATA_ERROR:
            return Object.assign({}, state, {
                isFetching: false,
                userData: action.error,
            });
        default:
            return state;
    }
}

const rootReducer = combineReducers({    
    finalUserData
});

export default rootReducer;
