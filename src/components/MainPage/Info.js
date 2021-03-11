import { Row, Col, Card } from 'react-bootstrap/esm';
import { LowerColText, UpperColText } from '../../styled/MainPage/MainPageStyles';

const Info = ({ stopsAmount, timeConvert, fromToTime, origin, destination, date, duration, stops }) =>
  <Row>
    <Col xs={3} sm={4} md={3} lg={4} xl={4}><UpperColText><Card.Text>{origin} - {destination}</Card.Text></UpperColText></Col>
    <Col xs={3} sm={4} md={4} lg={4} xl={3}><UpperColText><Card.Text>В ПУТИ</Card.Text></UpperColText></Col>
    <Col xs={3} sm={3} md={3} lg={3} xl={3}><UpperColText><Card.Text>{stopsAmount(stops)}</Card.Text></UpperColText></Col>

    <Col xs={3} sm={4} md={3} lg={4} xl={4}><LowerColText><Card.Text>{fromToTime(date)}</Card.Text></LowerColText></Col>
    <Col xs={3} sm={4} md={4} lg={4} xl={3}><LowerColText><Card.Text>{timeConvert(duration)}</Card.Text></LowerColText></Col>
    <Col xs={3} sm={3} md={3} lg={3} xl={3}><LowerColText><Card.Text>{stops.join(', ')}</Card.Text></LowerColText></Col>
  </Row>

export default Info;
