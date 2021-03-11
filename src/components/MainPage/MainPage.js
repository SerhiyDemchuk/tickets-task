import React from 'react';

import Ticket from './Ticket';
import Buttons from './Buttons';

const MainPage = ({ filter, convCurrency, stopsAmount, timeConvert, sliceTime, data }) =>
    <div>
        <Buttons />
        {data
            ? data.map((item) => (
                item.segments.map((info, index) => <div key={index}>
                    <Ticket
                        convCurrency={convCurrency}
                        stopsAmount={stopsAmount}
                        timeConvert={timeConvert}
                        sliceTime={sliceTime}
                        segments={item.segments}
                        stops={info.stops}
                        filter={filter}
                        price={item.price}
                    />
                </div>
                )
            ))
            : <h1>NO DATA</h1>
        }
    </div>

export default MainPage;
