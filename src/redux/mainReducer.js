import { put, takeEvery, call } from 'redux-saga/effects';

const SUCCESSFUL_REQUEST = 'tickets-task/mainReducer/SUCCESSFUL_REQUEST';
const FAIL_REQUEST = 'tickets-task/mainReducer/FAIL_REQUEST';
const SEND_REQUEST = 'tickets-task/mainReducer/SEND_REQUEST';

const initialState = {
    data: [],
    error: ''
}

export default function mainReducer(state = initialState, action) {
    switch (action.type) {
        case SUCCESSFUL_REQUEST:
            return { ...state, data: action.data }
        case FAIL_REQUEST:
            return { ...state, error: action.error }
        default:
            return state;
    }
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

export function* watchRequest() {
    yield takeEvery(SEND_REQUEST, fetchTicketsAsync);
}

export function* fetchTicketsAsync() {
    try {
        const id = yield call(() => fetch('https://front-test.beta.aviasales.ru/search').then(data => data.json()));
        const data = yield call(() => fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${id.searchId}`)
            .then(data => data.json())
            .then(response => response.tickets));
        yield put(successRequestAction(data));
    } catch (error) {
        yield put(failRequestAction(error));
    }
}