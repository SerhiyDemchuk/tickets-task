import React from 'react';

import Ticket from './Ticket';
import Buttons from './Buttons';

const MainPage = ({
    displayStopsAmount,
    asyncSortByPriceAction,
    asyncSortBySpeedAction,
    error,
    dispatch,
    displayPrice,
    displayInTransitTime,
    displayDestinationTime,
    data }) => (
    <div>
        <Buttons
            dispatch={dispatch}
            data={data}
            asyncSortByPriceAction={asyncSortByPriceAction}
            asyncSortBySpeedAction={asyncSortBySpeedAction}
        />
        {data
            ? data.map((item, index) => (
                <div key={index}>
                    <Ticket
                        displayPrice={displayPrice}
                        displayStopsAmount={displayStopsAmount}
                        displayInTransitTime={displayInTransitTime}
                        displayDestinationTime={displayDestinationTime}
                        segments={item.segments}
                        price={item.price}
                    />
                </div>
            ))
            : <h1>{error}</h1>
        }
    </div>
)

export default MainPage;
