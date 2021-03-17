import ToggleButton from 'react-bootstrap/esm/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/esm/ToggleButtonGroup';

import { Button } from '../../styled/MainPage/MainPageStyles';

const Buttons = ({ data, dispatch, asyncSortByPriceAction, asyncSortBySpeedAction }) => (
    <Button>
        <ToggleButtonGroup type="checkbox">
            <ToggleButton onChange={() => dispatch(asyncSortByPriceAction(data))} id="button_1" value="cheapest">САМЫЙ ДЕШЕВЫЙ</ToggleButton>
            <ToggleButton onChange={() => dispatch(asyncSortBySpeedAction(data))} id="button_2" value="fastest">САМЫЙ БЫСТРЫЙ</ToggleButton>
        </ToggleButtonGroup>
    </Button>
)

export default Buttons;
