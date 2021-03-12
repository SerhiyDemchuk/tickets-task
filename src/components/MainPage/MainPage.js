import React from 'react';

import Ticket from './Ticket';
import Buttons from './Buttons';

const MainPage = ({ convCurrency, stopsAmount, timeConvert, fromToTime, data }) =>
    <div>
        <Buttons />
        {data
            ? data.map((item, index) => (
                <div key={index}>
                    <Ticket
                        convCurrency={convCurrency}
                        stopsAmount={stopsAmount}
                        timeConvert={timeConvert}
                        fromToTime={fromToTime}
                        segments={item.segments}
                        price={item.price}
                    />
                </div>
            ))
            : <h1>NO DATA</h1>
        }
    </div>

export default MainPage;
