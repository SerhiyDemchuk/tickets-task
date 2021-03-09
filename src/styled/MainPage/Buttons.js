import ToggleButton from 'react-bootstrap/esm/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/esm/ToggleButtonGroup';
import styled from 'styled-components';

export const Button = styled.div`
#button_1 {
background-color: #2196F3;
font-size: 15px;
font-weight: 600;
},
#button_2 {
background-color: #fff;
border: #fff;
color: black;
font-size: 15px;
font-weight: 600;
},
#buttonGroup {
width: 100%;
}
`;

const Buttons = () => {
    return (
        <Button>
            <ToggleButtonGroup id="buttonGroup" type="checkbox">
                <ToggleButton id="button_1" checked>САМЫЙ ДЕШЕВЫЙ</ToggleButton>
                <ToggleButton id="button_2">САМЫЙ БЫСТРЫЙ</ToggleButton>
            </ToggleButtonGroup>
        </Button>
    );
};

export default Buttons;