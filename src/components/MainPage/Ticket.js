import React from 'react';
import { Card, Col, Row } from 'react-bootstrap/esm';

import Info from './Info';

import { Styles } from '../../styled/Styles';
import { Title } from '../../styled/MainPage/MainPageStyles';

const Ticket = ({
    price,
    displayPrice,
    segments = [],
    displayStopsAmount,
    displayTransitTime,
    displayDestinationTime
}) => (
    <Styles>
        <Card>
            <Card.Body>
                <Row>
                    <Col xs={4} sm={5} md={5} lg={8} xl={7}>
                        <Title>
                            <Card.Title>{displayPrice(price)}</Card.Title>
                        </Title>
                    </Col>
                    <Col xs={5} sm={5} md={5} lg={4} xl={4}>
                        <Card.Img
                            style={{ width: '110px', height: '35px' }}
                            src="https://bit.ly/37Y4YHu">
                        </Card.Img>
                    </Col>
                </Row>
            </Card.Body>
            <Card.Body>
                {
                    segments.map((item, index) => (
                        <div key={index}>
                            <Info
                                date={item.date}
                                stops={item.stops}
                                origin={item.origin}
                                duration={item.duration}
                                destination={item.destination}
                                displayStopsAmount={displayStopsAmount}
                                displayTransitTime={displayTransitTime}
                                displayDestinationTime={displayDestinationTime}
                            />
                        </div>
                    ))
                }
            </Card.Body>
        </Card>
    </Styles>
)

export default Ticket;
