import styled from 'styled-components';
import Card from 'react-bootstrap/esm/Card';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

const UpperColText = styled.div`
  .card-text {
    color: #ACBAC2;
    margin-top: 15px;
    font-size: 14px;
    font-weight: 600;
    @media (max-width: 992px) {
      font-size: 11px;
    },
    @media (max-width: 768px) {
      margin: 0;
      font-size: 6px;
    }
  }
`;

const LowerColText = styled.div`
  .card-text {
    color: #4A4A4A;
    font-size: 15px;
    font-weight: 500;
    @media (max-width: 992px) {
      font-size: 13px;
    }
  }
`;

const InfoCard = ({ column, fromTo, timeInRoad, transfersAmount, startsAt, transfer }) => {
  if (column === 'upper') {
    return (
      <Row>
        <Col xs={3} sm={4} md={3} lg={4} xl={4}><UpperColText><Card.Text>{fromTo}</Card.Text></UpperColText></Col>
        <Col xs={3} sm={4} md={4} lg={4} xl={4}><UpperColText><Card.Text>В ПУТИ</Card.Text></UpperColText></Col>
        <Col xs={3} sm={3} md={3} lg={3} xl={3}><UpperColText><Card.Text>{transfersAmount}</Card.Text></UpperColText></Col>
      </Row>
    )
  }
  if (column === 'lower') {
    return (
      <Row>
        <Col xs={3} sm={4} md={3} lg={4} xl={4}><LowerColText><Card.Text>{startsAt}</Card.Text></LowerColText></Col>
        <Col xs={3} sm={4} md={4} lg={4} xl={4}><LowerColText><Card.Text>{timeInRoad}</Card.Text></LowerColText></Col>
        <Col xs={3} sm={3} md={3} lg={3} xl={3}><LowerColText><Card.Text>{transfer}</Card.Text></LowerColText></Col>
      </Row>
    )
  }
}

export default InfoCard;