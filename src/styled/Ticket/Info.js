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

const Info = ({ stopsAmount, timeConvert, sliceTime, origin, destination, date, duration, stops }) => {
    return (
        <Row>
            <Col xs={3} sm={4} md={3} lg={4} xl={4}><UpperColText><Card.Text>{origin} - {destination}</Card.Text></UpperColText></Col>
            <Col xs={3} sm={4} md={4} lg={4} xl={3}><UpperColText><Card.Text>В ПУТИ</Card.Text></UpperColText></Col>
            <Col xs={3} sm={3} md={3} lg={3} xl={3}><UpperColText><Card.Text>{stopsAmount(stops)}</Card.Text></UpperColText></Col>

            <Col xs={3} sm={4} md={3} lg={4} xl={4}><LowerColText><Card.Text>{sliceTime(date)}</Card.Text></LowerColText></Col>
            <Col xs={3} sm={4} md={4} lg={4} xl={3}><LowerColText><Card.Text>{timeConvert(duration)}</Card.Text></LowerColText></Col>
            <Col xs={3} sm={3} md={3} lg={3} xl={3}><LowerColText><Card.Text>{stops.join(', ')}</Card.Text></LowerColText></Col>
        </Row>
    )
}

export default Info;