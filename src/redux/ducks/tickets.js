import { put, takeEvery, call, all } from 'redux-saga/effects';

const SUCCESSFUL_REQUEST = 'tickets-task/tickets/SUCCESSFUL_REQUEST';
const FAIL_REQUEST = 'tickets-task/tickets/FAIL_REQUEST';
const SEND_REQUEST = 'tickets-task/tickets/SEND_REQUEST';
const FILTER_DATA = 'tickets-task/tickets/FILTER_DATA';
const SORT_DATA = 'tickets-task/tickets/SORT_DATA';
const SORT_BY_PRICE = 'tickets-task/tickets/SORT_BY_PRICE';
const SORT_BY_SPEED = 'tickets-task/tickets/SORT_BY_SPEED';
const FILTER_BY_STOPS_AMOUNT = 'tickets-task/tickets/FILTER_BY_STOPS_AMOUNT';

const initialState = {
    isLoaded: false,
    data: [],
    error: ''
}

export default function mainReducer(state = initialState, action) {
    switch (action.type) {
        case SUCCESSFUL_REQUEST:
        case FILTER_DATA:
        case SORT_DATA:
            return { ...state, data: action.data, isLoaded: true }
        case FAIL_REQUEST:
            return { ...state, error: action.error }
        default: return state;
    }
}

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

export function asyncSendRequestAction(pathname) {
    return { type: SEND_REQUEST, pathname };
}

export function asyncSortByPriceAction(data) {
    return { type: SORT_BY_PRICE, data }
}

export function asyncSortBySpeedAction(data) {
    return { type: SORT_BY_SPEED, data }
}

export function asyncFilterByStopsAction(data, filter) {
    return { type: FILTER_BY_STOPS_AMOUNT, data, filter }
}

export function* sortByPrice() {
    yield takeEvery(SORT_BY_PRICE, onSortByPrice);
}

export function* sortBySpeed() {
    yield takeEvery(SORT_BY_SPEED, onSortBySpeed);
}

export function* sendRequest() {
    yield takeEvery(SEND_REQUEST, fetchTicketsAsync);
}

export function* filterByStops() {
    yield takeEvery(FILTER_BY_STOPS_AMOUNT, filterData)
}

export function* onSortBySpeed({ data }) {
    yield console.log('in process');
}

export function* rootSaga() {
    yield all([
        sendRequest(),
        sortByPrice(),
        sortBySpeed(),
        filterByStops()
    ]);
}

export function filterData(data, filter) {
    let length;
    if (filter === 'no_stops') length = 0;
    if (filter === 'one_stop') length = 1;
    if (filter === 'two_stops') length = 2;
    if (filter === 'three_stops') length = 3;

    const filteredData = [];
    data.map(item => item.segments.map(info =>
        info.stops.length === length || filter === undefined
            ? filteredData.push(item)
            : null
    ));
    return filteredData;
}

export function* fetchTicketsAsync({ pathname }) {
    try {
        const id = yield call(() => fetch('https://front-test.beta.aviasales.ru/search').then(data => data.json()));
        const data = yield call(() => fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${id.searchId}`)
            .then(data => data.json())
            .then(response => response.tickets));
        const filteredWithPath = filterData(data, pathname);
        yield put(successRequestAction(filteredWithPath));
    } catch (error) {
        console.log(error);
        yield put(failRequestAction(error));
    }
}

export function* onSortByPrice(data) {
    const sortedByPrice = data.data.sort((a, b) => (a.price > b.price) ? 1 : -1);
    yield put(sortDataAction(sortedByPrice));
}
