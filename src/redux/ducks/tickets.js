import { put, takeEvery, call } from 'redux-saga/effects';

import {
    failRequestAction,
    sortDataAction,
    successRequestAction
} from './actions/tickets';
import {
    FAIL_REQUEST,
    FILTER_DATA,
    SEND_REQUEST,
    SORT_DATA,
    SUCCESSFUL_REQUEST
} from './actionCreators/tickets';

const initialState = {
    data: [],
    error: ''
}

export default function mainReducer(state = initialState, action) {
    switch (action.type) {
        case SUCCESSFUL_REQUEST:
        case FILTER_DATA:
        case SORT_DATA:
            return { ...state, data: action.data }
        case FAIL_REQUEST:
            return { ...state, error: action.error }
        default: return state;
    }
}

export function filterData(data, filter) {
    const filteredData = [];
    data.map(item => item.segments.map(info =>
        info.stops.length === filter
            ? filteredData.push(item)
            : null
    ));
    return filteredData;
}

export function onSortByPrice(data) {
    const sortedByPrice = data.sort((a, b) => {
        if (a.price > b.price) return 1;
        if (a.price < b.price) return -1;
        return 0;
    });
    sortDataAction(sortedByPrice);
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
        const filteredData = yield filterData(data, 2);
        yield put(successRequestAction(filteredData));
    } catch (error) {
        yield put(failRequestAction(error));
    }
}
