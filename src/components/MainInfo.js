import React from 'react';
import Card from 'react-bootstrap/esm/Card';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import styles from './MainPage.module.css';

const MainInfo = () => {
  return (
    <div>
      <Card className={styles.card2}>
            <Card.Body>
              <Row>
                <Col>
                  <Card.Title>13 400 P</Card.Title>
                </Col>
                <Col>
                  <Card.Img className={styles.cardImage} src="https://bit.ly/37Y4YHu"></Card.Img>
                </Col>
              </Row>
            </Card.Body>
            <Card.Body>
              <Row>
                <Col><Card.Text>MOW - HKT</Card.Text></Col>
                <Col><Card.Text>В ПУТИ</Card.Text></Col>
                <Col><Card.Text>2 ПЕРЕСАДКИ</Card.Text></Col>
              </Row>
              <Row >
                <Col><Card.Text>10:45 - 08:00</Card.Text></Col>
                <Col><Card.Text>21ч 15м</Card.Text></Col>
                <Col><Card.Text>HKG, JNB</Card.Text></Col>
              </Row>
              <Row>
                <Col><Card.Text>MOW - HKT</Card.Text></Col>
                <Col><Card.Text>В ПУТИ</Card.Text></Col>
                <Col><Card.Text>2 ПЕРЕСАДКИ</Card.Text></Col>
              </Row>
              <Row>
                <Col><Card.Text>11:20 - 00:50</Card.Text></Col>
                <Col><Card.Text>13ч 30м</Card.Text></Col>
                <Col><Card.Text>HKG</Card.Text></Col>
              </Row>
            </Card.Body>
          </Card>
    </div>
  )
}

export default MainInfo;