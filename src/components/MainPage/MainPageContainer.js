import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MainPage from './MainPage';

import { convCurrency, fromToTime, timeConvert } from '../../utils/MainPage';

const MainPageContainer = () => {

    const dispatch = useDispatch();
    const data = useSelector(state => state.data);

    const stopsAmount = (stops) => {
        if (stops.length === 0) {
            return 'Без пересадок';
        } else if (stops.length === 1) {
            return '1 пересадка'
        } else if (stops.length > 1) {
            return `${stops.length} пересадки`
        }
    }

    useEffect(() => {
        dispatch({ type: 'tickets-task/tickets/SEND_REQUEST' });
    }, [dispatch]);

    return (
        <div>
            <MainPage
                convCurrency={convCurrency}
                stopsAmount={stopsAmount}
                timeConvert={timeConvert}
                fromToTime={fromToTime}
                data={data}
            />
        </div>
    )
}

export default MainPageContainer;
