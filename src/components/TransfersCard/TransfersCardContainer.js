import React from 'react';

import TransfersCard from '../../styled/TransfersCard/TransfersCard';

const TransfersCardContainer = () => {
    const checkboxOptions = [
        { path: '/vse', key: 'Option1', value: 'Все' },
        { path: '/0', key: 'Option2', value: 'Без пересадки' },
        { path: '/1', key: 'Option3', value: '1 пересадка' },
        { path: '/2', key: 'Option4', value: '2 пересадки' },
        { path: '/3', key: 'Option5', value: '3 пересадки' }
    ]
    const initialValues = {
        checkboxOptions: []
    }

    return (
        <div>
            <TransfersCard
                initialValues={initialValues}
                checkboxOptions={checkboxOptions}
            />
        </div>
    )
}

export default TransfersCardContainer;