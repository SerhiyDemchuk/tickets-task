import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MainPage from './MainPage';

const MainPageContainer = (props) => {

    let { filter } = props.match.params;

    filter = parseInt(filter);

    const dispatch = useDispatch();
    const data = useSelector(state => state.data);

    const sliceTime = (time) => {
        const a = time.slice(11, 16);
        return `${a} - `;
    }

    const convCurrency = (currency) => {
        return currency.toLocaleString('ru-RU', { 
            style: 'decimal',
            minimumFractionDigits: 0 
        }) + ' Р';
    }

    const timeConvert = (time) => {
        const num = time;
        const hours = (num / 60);
        const rhours = Math.floor(hours);
        const minutes = (hours - rhours) * 60;
        const rminutes = Math.round(minutes);
        return `${rhours}ч ${rminutes}м`;
    }

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
        dispatch({ type: 'tickets-task/mainReducer/SEND_REQUEST' });
    }, [dispatch]);

    return (
        <div>
            <MainPage
                convCurrency={convCurrency}
                stopsAmount={stopsAmount}
                timeConvert={timeConvert}
                sliceTime={sliceTime}
                data={data}
                filter={filter}
            />
        </div>
    )
}

export default MainPageContainer;