import { Row, Col } from 'react-bootstrap/esm';

import { LowerColText, UpperColText } from '../../styled/MainPage/MainPageStyles';

const Info = ({ displayStopsAmount, displayInTransitTime, displayDestinationTime, origin, destination, date, duration, stops }) => (
  <Row>
    <Col xs={4} sm={4} md={3} lg={4} xl={4}><UpperColText>{origin} - {destination}</UpperColText></Col>
    <Col xs={3} sm={4} md={4} lg={4} xl={3}><UpperColText>В ПУТИ</UpperColText></Col>
    <Col xs={3} sm={3} md={3} lg={3} xl={3}><UpperColText>{displayStopsAmount(stops)}</UpperColText></Col>

    <Col xs={4} sm={4} md={3} lg={4} xl={4}><LowerColText>{displayDestinationTime(date)}</LowerColText></Col>
    <Col xs={3} sm={4} md={4} lg={4} xl={3}><LowerColText>{displayInTransitTime(duration)}</LowerColText></Col>
    <Col xs={3} sm={3} md={3} lg={3} xl={3}><LowerColText>{stops.join(', ')}</LowerColText></Col>
  </Row>
)

export default Info;
