import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import MainPage from './MainPage';

import {
    displayPrice,
    displayTransitTime,
    displayStopsAmount,
    displayDestinationTime
} from '../../utils/MainPage';
import {
    asyncSortByPriceAction,
    asyncSortBySpeedAction,
    asyncSendRequestAction
} from '../../redux/ducks/tickets';

const MainPageContainer = () => {

    const history = useHistory();
    const params = useParams();
    const { filter } = params;

    const dispatch = useDispatch();
    const { isLoaded, data, error } = useSelector(state => state);

    useEffect(() => {
        dispatch(asyncSendRequestAction(filter));
    }, [dispatch, filter, history]);

    return (
        <MainPage
            data={data}
            error={error}
            isLoaded={isLoaded}
            dispatch={dispatch}
            displayPrice={displayPrice}
            displayStopsAmount={displayStopsAmount}
            displayTransitTime={displayTransitTime}
            displayDestinationTime={displayDestinationTime}
            asyncSortByPriceAction={asyncSortByPriceAction}
            asyncSortBySpeedAction={asyncSortBySpeedAction}
        />
    )
}

export default MainPageContainer;
