import React from 'react';
import { Card, Col, Row } from 'react-bootstrap/esm';
import { Styles, Title } from '../../styled/MainPage/MainPageStyles';

import Info from './Info';

const Ticket = ({ stops, filter, convCurrency, stopsAmount, timeConvert, fromToTime, price, segments = [] }) =>
    <Styles>
        {stops.length === 1
            ? <Card>
                <Card.Body>
                    <Row>
                        <Col xs={6} sm={7} md={7} lg={8} xl={7}>
                            <Title>
                                <Card.Title>{convCurrency(price)}</Card.Title>
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
                                    stopsAmount={stopsAmount}
                                    timeConvert={timeConvert}
                                    fromToTime={fromToTime}
                                    origin={item.origin}
                                    destination={item.destination}
                                    date={item.date}
                                    duration={item.duration}
                                    stops={item.stops}
                                />
                            </div>
                        ))
                    }
                </Card.Body>
            </Card>
            : null
        }
    </Styles>

export default Ticket;
