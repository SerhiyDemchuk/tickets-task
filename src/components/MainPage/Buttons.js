import React from 'react';
import ToggleButton from 'react-bootstrap/esm/ToggleButton';

import { StyledToggleButtonGroup } from '../../styled/MainPage/MainPageStyles';

const Buttons = ({ data, dispatch, asyncSortByPriceAction, asyncSortBySpeedAction }) => (
    <StyledToggleButtonGroup type="checkbox">
        <ToggleButton onChange={() => dispatch(asyncSortByPriceAction(data))} id="button_1" value="cheapest">САМЫЙ ДЕШЕВЫЙ</ToggleButton>
        <ToggleButton onChange={() => dispatch(asyncSortBySpeedAction(data))} id="button_2" value="fastest">САМЫЙ БЫСТРЫЙ</ToggleButton>
    </StyledToggleButtonGroup>
)

export default Buttons;
