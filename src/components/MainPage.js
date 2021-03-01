import React from 'react';
import styles from './MainPage.module.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import MainInfo from './MainInfo';

const MainPage = () => {

  return (
    <div>
      <Container className={styles.container}>
        <div>
          <Card className={styles.card1}>
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
        </div>
        <div className={styles.right}>
          <ToggleButtonGroup type="checkbox" defaultValue={[1]}>
            <ToggleButton value={1}>Самый дешевый</ToggleButton>
            <ToggleButton variant="light">Самый быстрый</ToggleButton>
          </ToggleButtonGroup>
          <MainInfo />
        </div>
      </Container>
    </div>
  )
}

export default MainPage;