import ToggleButton from 'react-bootstrap/esm/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/esm/ToggleButtonGroup';

import { Button } from '../../styled/MainPage/MainPageStyles';

const Buttons = () =>
    <Button>
        <ToggleButtonGroup id="buttonGroup" type="checkbox">
            <ToggleButton id="button_1" checked>САМЫЙ ДЕШЕВЫЙ</ToggleButton>
            <ToggleButton id="button_2">САМЫЙ БЫСТРЫЙ</ToggleButton>
        </ToggleButtonGroup>
    </Button>

export default Buttons;
