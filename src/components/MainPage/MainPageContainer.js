import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import MainPage from './MainPage';

import {
    displayPrice,
    displayDestinationTime,
    displayInTransitTime,
    displayStopsAmount
} from '../../utils/MainPage';

import {
    asyncSortByPriceAction,
    asyncSortBySpeedAction,
    asyncSendRequestAction
} from '../../redux/ducks/tickets';

const MainPageContainer = () => {
    const params = useParams();
    const { filter } = params;

    const dispatch = useDispatch();
    const { data, error } = useSelector(state => state);

    useEffect(() => {
        dispatch(asyncSendRequestAction(filter));
    }, [dispatch, filter]);

    return (
        <div>
            <MainPage
                displayPrice={displayPrice}
                displayStopsAmount={displayStopsAmount}
                displayInTransitTime={displayInTransitTime}
                displayDestinationTime={displayDestinationTime}
                data={data}
                dispatch={dispatch}
                error={error}
                asyncSortByPriceAction={asyncSortByPriceAction}
                asyncSortBySpeedAction={asyncSortBySpeedAction}
            />
        </div>
    )
}

export default MainPageContainer;
