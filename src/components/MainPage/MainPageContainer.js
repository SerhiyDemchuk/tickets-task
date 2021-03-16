import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import MainPage from './MainPage';

import {
    displayPrice,
    displayStopsAmount,
    displayTransitTime,
    displayDestinationTime
} from '../../utils/MainPage';

import {
    asyncSortByPriceAction,
    asyncSortBySpeedAction,
    asyncSendRequestAction
} from '../../redux/ducks/tickets';

const MainPageContainer = () => {
    const history = useHistory();
    console.log(history);

    const params = useParams();
    const { filter } = params;

    
    const dispatch = useDispatch();
    const { data, error } = useSelector(state => state);
    
    useEffect(() => {
        dispatch(asyncSendRequestAction(filter));
    }, [dispatch, filter, history]);

    return (
        <div>
            <MainPage
                data={data}
                error={error}
                dispatch={dispatch}
                displayPrice={displayPrice}
                displayStopsAmount={displayStopsAmount}
                displayTransitTime={displayTransitTime}
                displayDestinationTime={displayDestinationTime}
                asyncSortByPriceAction={asyncSortByPriceAction}
                asyncSortBySpeedAction={asyncSortBySpeedAction}
            />
        </div>
    )
}

export default MainPageContainer;
