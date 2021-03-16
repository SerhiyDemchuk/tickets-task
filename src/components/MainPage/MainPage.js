import React from 'react';

import Ticket from './Ticket';
import Buttons from './Buttons';

const MainPage = ({
    data,
    dispatch,
    error,
    displayPrice,
    displayStopsAmount,
    displayTransitTime,
    displayDestinationTime,
    asyncSortByPriceAction,
    asyncSortBySpeedAction
}) => (
    <div>
        <Buttons
            data={data}
            dispatch={dispatch}
            asyncSortByPriceAction={asyncSortByPriceAction}
            asyncSortBySpeedAction={asyncSortBySpeedAction}
        />
        {data
            ? data.map((item, index) => (
                <div key={index}>
                    <Ticket
                        price={item.price}
                        segments={item.segments}
                        displayPrice={displayPrice}
                        displayStopsAmount={displayStopsAmount}
                        displayTransitTime={displayTransitTime}
                        displayDestinationTime={displayDestinationTime}
                    />
                </div>
            ))
            : <h1>{error}</h1>
        }
    </div>
)

export default MainPage;
