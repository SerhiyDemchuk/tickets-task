import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import MainPage from './MainPage';

import {
    displayTime,
    displayPrice,
    displayStopsAmount,
} from '../../utils/MainPage';
import {
    asyncSortByPriceAction,
    asyncSortBySpeedAction,
    asyncSendRequestAction
} from '../../redux/ducks/tickets';

const MainPageContainer = () => {

    const history = useHistory();
    const { filter } = useParams();

    const dispatch = useDispatch();
    const { data, error } = useSelector(state => state);

    useEffect(() => {
        dispatch(asyncSendRequestAction(filter));
    }, [dispatch, filter, history]);

    return (
        <MainPage
            data={data}
            error={error}
            dispatch={dispatch}
            displayTime={displayTime}
            displayPrice={displayPrice}
            displayStopsAmount={displayStopsAmount}
            asyncSortByPriceAction={asyncSortByPriceAction}
            asyncSortBySpeedAction={asyncSortBySpeedAction}
        />
    )
}

export default MainPageContainer;
