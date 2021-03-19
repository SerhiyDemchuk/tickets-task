import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import TransfersCard from './TransfersCard';

const checkboxOptions = [
    { id: 1, path: '/', value: 'Все', checked: true },
    { id: 2, path: '/no_stops', value: 'Без пересадки', checked: false },
    { id: 3, path: '/one_stop', value: '1 пересадка', checked: false },
    { id: 4, path: '/two_stops', value: '2 пересадки', checked: false },
    { id: 5, path: '/three_stops', value: '3 пересадки', checked: false }
]

const TransfersCardContainer = () => {

    const history = useHistory();
    const [options, setOptions] = useState(checkboxOptions);
    const dispatch = useDispatch();

    const toggleCheckbox = (option) => {
        const updatedOptions = options.map(item => {
            if (item.id === option.id) {
                item.checked = !item.checked;
                history.push(item.path);
                // localStorage.setItem()
            }
            if (item.checked && option.id !== item.id) {
                item.checked = false;
            }
            return item;
        });
        setOptions(updatedOptions);
    }

    return (
        <TransfersCard
            history={history}
            dispatch={dispatch}
            checkboxOptions={options}
            initialValues={checkboxOptions}
            toggleCheckbox={toggleCheckbox}
        />
    )
}

export default TransfersCardContainer;
