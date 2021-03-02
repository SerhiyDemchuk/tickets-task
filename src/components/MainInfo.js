import React from 'react';
import Card from 'react-bootstrap/esm/Card';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import styled from 'styled-components';

const Styles = styled.div`
  .card {
    width: 500px;
    height: 185px;
    padding: 20px 50px 25px 20px;
    margin-right: 50px;
    margin-top: 20px;
  },
  .card-body {
    margin: 0;
    padding: 0;
  },
`;

const Title = styled.div`
  .card-title {
    color: #2196F3;
  }
`;

const UpperColText = styled.div`
  .card-text {
    color: #ACBAC2;
    margin-top: 20px;
    font-size: 14px;
    font-weight: 600;
  }
`;

const LowerColText = styled.div`
  .card-text {
    color: #4A4A4A;
    font-size: 15px;
    font-weight: 500;
  }
`;

const MainInfo = () => {
  return (
    <Styles>
      <Card>
        <Card.Body>
          <Row>
            <Col>
              <Title>
                <Card.Title>13 400 P</Card.Title>
              </Title>
            </Col>
            <Col xs lg={4}>
              <Card.Img
                style={{ width: '110px', height: '35px' }}
                src="https://bit.ly/37Y4YHu">
              </Card.Img>
            </Col>
          </Row>
        </Card.Body>
        <Card.Body>
          <Row>
            <Col><UpperColText><Card.Text>MOW - HKT</Card.Text></UpperColText></Col>
            <Col><UpperColText><Card.Text>В ПУТИ</Card.Text></UpperColText></Col>
            <Col><UpperColText><Card.Text>2 ПЕРЕСАДКИ</Card.Text></UpperColText></Col>
          </Row>
          <Row >
            <Col><LowerColText><Card.Text>10:45 - 08:00</Card.Text></LowerColText></Col>
            <Col><LowerColText><Card.Text>21ч 15м</Card.Text></LowerColText></Col>
            <Col><LowerColText><Card.Text>HKG, JNB</Card.Text></LowerColText></Col>
          </Row>
          <Row>
            <Col><UpperColText><Card.Text>MOW - HKT</Card.Text></UpperColText></Col>
            <Col><UpperColText><Card.Text>В ПУТИ</Card.Text></UpperColText></Col>
            <Col><UpperColText><Card.Text>1 ПЕРЕСАДКА</Card.Text></UpperColText></Col>
          </Row>
          <Row>
            <Col><LowerColText><Card.Text>10:20 - 00:50</Card.Text></LowerColText></Col>
            <Col><LowerColText><Card.Text>13ч 30м</Card.Text></LowerColText></Col>
            <Col><LowerColText><Card.Text>HKG</Card.Text></LowerColText></Col>
          </Row>
        </Card.Body>
      </Card>
    </Styles>
  )
}

export default MainInfo;