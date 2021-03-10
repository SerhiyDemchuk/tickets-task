import React from 'react';

import Ticket from '../../styled/Ticket/Ticket';
import Buttons from '../../styled/MainPage/Buttons';

const MainPage = ({ filter, convCurrency, stopsAmount, timeConvert, sliceTime, data, ...props }) => {

    return (
        <div>
            <Buttons />
            {data
                ? data.map((item, index) => (
                    <div key={index}>
                        <Ticket
                            convCurrency={convCurrency}
                            stopsAmount={stopsAmount}
                            timeConvert={timeConvert}
                            sliceTime={sliceTime}
                            segments={item.segments}
                            price={item.price}
                            filter={filter}
                        />
                    </div>
                ))
                : <h1>NO DATA</h1>
            }
        </div>
    )
}

export default MainPage;
