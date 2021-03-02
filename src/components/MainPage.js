import React from 'react';
import styles from './MainPage.module.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import MainInfo from './MainInfo';
import styled from 'styled-components';

const Styles = styled.div`
  .container {
    display: flex;
    justify-content: space-around;
    background: #F3F7FA;
  },
    #button_1 {
    background-color: #2196F3;
  },
  #button_2 {
    background-color: #fff;
    color: black;
    border: #fff;
  },
  #leftCard {
    max-height: 252px;
  }
`;

const MainPage = () => {
  return (
    <Styles>
      <Container>
        <Card id="leftCard">
          <Card.Body>
            <Card.Title>Количество пересадок</Card.Title>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Все" />
              <Form.Check type="checkbox" label="Без пересадок" />
              <Form.Check type="checkbox" label="1 пересадка" />
              <Form.Check type="checkbox" label="2 пересадки" />
              <Form.Check type="checkbox" label="3 пересадки" />
            </Form.Group>
          </Card.Body>
        </Card>
        <div>
          <div>
            <ToggleButtonGroup style={{ width: '100%', paddingRight: "50px" }} size="lg" type="checkbox">
              <ToggleButton id="button_1" checked>САМЫЙ ДЕШЕВЫЙ</ToggleButton>
              <ToggleButton id="button_2">Самый быстрый</ToggleButton>
            </ToggleButtonGroup>
          </div>
          <div>
            <MainInfo />
            <MainInfo />
            <MainInfo />
            <MainInfo />
            <MainInfo />
            <MainInfo />
          </div>
        </div>
      </Container>
    </Styles>
  )
}

export default MainPage;