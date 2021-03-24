import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import TransfersCard from './TransfersCard';

const checkboxOptions = [

    // { id: 1, path: {pathname: '/', search: '?stop=all'}, value: 'Все', checked: true },
    // { id: 2, path: {pathname: '/', search: '?stop=no_stops'}, value: 'Без пересадки', checked: false },
    // { id: 3, path: {pathname: '/', search: '?stop=one_stop'}, value: '1 пересадка', checked: false },
    // { id: 4, path: {pathname: '/', search: '?stop=two_stops'}, value: '2 пересадки', checked: false },
    // { id: 5, path: {pathname: '/', search: '?stop=three_stops'}, value: '3 пересадки', checked: false }

    { id: 1, path: '/', value: 'All', checked: true },
    { id: 2, path: '/no_stops', value: 'No stops', checked: false },
    { id: 3, path: '/one_stop', value: '1 stop', checked: false },
    { id: 4, path: '/two_stops', value: '2 stops', checked: false },
    { id: 5, path: '/three_stops', value: '3 stops', checked: false }
]

const TransfersCardContainer = () => {
    
    const history = useHistory();
    const [options, setOptions] = useState(checkboxOptions);
    const dispatch = useDispatch();

    const location = useLocation();
    console.log(location);

    // const urlParams = new URLSearchParams(location);

    const onToggleCheckbox = (option) => {
        const updatedOptions = options.map(item => {
            if (item.id === option.id) {
                item.checked = !item.checked;
                history.push(item.path);
            };
            if (item.checked && option.id !== item.id) {
                item.checked = false;
            };
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
            onToggleCheckbox={onToggleCheckbox}
        />
    );
}

export default TransfersCardContainer;
