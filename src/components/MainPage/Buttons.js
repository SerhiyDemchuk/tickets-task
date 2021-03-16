import ToggleButton from 'react-bootstrap/esm/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/esm/ToggleButtonGroup';

import { Button } from '../../styled/MainPage/MainPageStyles';

const Buttons = ({ asyncSortByPriceAction, asyncSortBySpeedAction, dispatch, data }) => {
    return (
    <Button>
        <ToggleButtonGroup type="checkbox">
            <ToggleButton onClick={() => dispatch(asyncSortByPriceAction(data))} id="button_1" value="/">САМЫЙ ДЕШЕВЫЙ</ToggleButton>
            <ToggleButton onClick={() => dispatch(asyncSortBySpeedAction(data))} id="button_2" value="/">САМЫЙ БЫСТРЫЙ</ToggleButton>
        </ToggleButtonGroup>
    </Button>
    )
}

export default Buttons;
