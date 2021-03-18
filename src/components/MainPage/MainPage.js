import React from 'react';

import Ticket from './Ticket';
import Buttons from './Buttons';

const MainPage = ({
    data,
    error,
    dispatch,
    displayPrice,
    displayStopsAmount,
    displayTransitTime,
    displayDestinationTime,
    asyncSortByPriceAction,
    asyncSortBySpeedAction
}) => (
    <>
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
    </>
)

export default MainPage;
