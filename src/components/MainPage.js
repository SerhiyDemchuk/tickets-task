import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import MainInfo from './MainInfo';
import styled from 'styled-components';
import Checkbox from './Checkbox';

const Styles = styled.div`
  .container {
    display: flex;
    justify-content: center;
    background: #F3F7FA;
    padding: 20px 0;
  },
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
  }
`;

const RightSide = styled.div`
  width: 55%;
  margin-left: 10px;
  #buttonGroup {
      width: 100%;
  }
`;

const LeftSide = styled.div`
margin-right: 10px;
.form-label {
    padding-left: 20px;
    font-size: 12px;
    font-weight: 700;
    color: #777777;
    text-align: left;
    padding-top: 20px;
},
.form-group {
    display: flex;
    flex-direction: column;
    height: 230px;
    width: 230px;
}
`;

const MainPage = () => {
    const [checked, setChecked] = useState(false);
    const handleCheckboxChange = () => {
        setChecked(!checked);
    };

    return (
        <Styles>
            <Container>
                <LeftSide>
                    <Card>
                        <Form>
                            <Form.Group>
                                <Form.Label>КОЛИЧЕСТВО ПЕРЕСАДОК</Form.Label>
                                <label>
                                    <Checkbox
                                        checked={checked}
                                        onChange={handleCheckboxChange}
                                        text="Все"
                                    />
                                    <Checkbox
                                        checked={checked}
                                        onChange={handleCheckboxChange}
                                        text="Без пересадок"
                                    />
                                    <Checkbox
                                        checked={checked}
                                        onChange={handleCheckboxChange}
                                        text="1 пересадка"
                                    />
                                    <Checkbox
                                        checked={checked}
                                        onChange={handleCheckboxChange}
                                        text="2 пересадки"
                                    />
                                    <Checkbox
                                        checked={checked}
                                        onChange={handleCheckboxChange}
                                        text="3 пересадки"
                                    />
                                </label>
                            </Form.Group>
                        </Form>
                    </Card>
                </LeftSide>
                <RightSide>
                    <ToggleButtonGroup id="buttonGroup" size="lg" type="checkbox">
                        <ToggleButton id="button_1" checked>САМЫЙ ДЕШЕВЫЙ</ToggleButton>
                        <ToggleButton id="button_2">САМЫЙ БЫСТРЫЙ</ToggleButton>
                    </ToggleButtonGroup>
                    <div>
                        <MainInfo />
                        <MainInfo />
                        <MainInfo />
                        <MainInfo />
                        <MainInfo />
                    </div>
                </RightSide>
            </Container>
        </Styles>
    )
}

export default MainPage;