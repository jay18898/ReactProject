import {
    REQUEST_FINALUSERDATA,
    RECEIVE_FINALUSERDATA,
    RECEIVE_FINALUSERDATA_ERROR
} from './constants/ActionTypes';

export function requestFinalUserData() {
    return {
        type: REQUEST_FINALUSERDATA,
    };
}


function receiveFinalUserData(json) {
    return {
        type: RECEIVE_FINALUSERDATA,
        userData: json,
    };
}

function receiveFinalUserDataErr(error) {
    return {
        type: RECEIVE_FINALUSERDATA_ERROR,
        error,
    };
}



export function fetchFinalUserData() {
    return dispatch => {
        dispatch(requestFinalUserData());
        return fetch(`https://randomuser.me/api/?results=100`)
            .then(res => res.json())
            .then(json => dispatch(receiveFinalUserData(json)))
            .catch(err => dispatch(receiveFinalUserDataErr(err)));
    };
}

export function fetchUserAndRepos() {
    return (dispatch, getState) => {
        return dispatch(fetchFinalUserData()).then(() => {
            const { finalUserData } = getState();
            if (
                !finalUserData.isFetching &&
                finalUserData.userData.message
            ) {
                return;
            }
        });
    };
}
