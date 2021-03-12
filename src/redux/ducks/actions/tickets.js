import {
    FAIL_REQUEST,
    FILTER_DATA,
    SEND_REQUEST,
    SORT_DATA,
    SUCCESSFUL_REQUEST
} from '../actionCreators/tickets';

export function filterDataAction(data) {
    return { type: FILTER_DATA, data };
}

export function sortDataAction(data) {
    return { type: SORT_DATA, data };
}

export function successRequestAction(data) {
    return { type: SUCCESSFUL_REQUEST, data };
}

export function failRequestAction(error) {
    return { type: FAIL_REQUEST, error };
}

export function sendRequest() {
    return { type: SEND_REQUEST };
}
