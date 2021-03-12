import React, { useState } from 'react';

import TransfersCard from './TransfersCard';

const checkboxOptions = [
    { id: 1, path: '/all', value: 'Все', checked: true },
    { id: 2, path: '/no_stops', value: 'Без пересадки', checked: false },
    { id: 3, path: '/one_stop', value: '1 пересадка', checked: false },
    { id: 4, path: '/two_stops', value: '2 пересадки', checked: false },
    { id: 5, path: '/three_stops', value: '3 пересадки', checked: false }
]

const TransfersCardContainer = () => {

    const [options, setOptions] = useState(checkboxOptions);

    const toggleCheckbox = (option) => {
        const updatedOptions = options.map(item => {
            if (item.id === option.id) {
                item.checked = !item.checked
            }
            return item;
        })
        setOptions(updatedOptions);
    }

    return (
        <TransfersCard
            initialValues={checkboxOptions}
            checkboxOptions={options}
            toggleCheckbox={toggleCheckbox}
        />
    )
}

export default TransfersCardContainer;
