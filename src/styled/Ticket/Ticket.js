import React from 'react';

import Card from 'react-bootstrap/esm/Card';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

import Info from './Info';
import { Styles } from './Styles';
import { Title } from './Title';

const Ticket = ({ filter, convCurrency, stopsAmount, timeConvert, sliceTime, price, segments = [], ...props }) => {
    return (
        <Styles>
            {
                segments.map((item, index) => (
                    item.stops.length === filter ?
                        <div key={index}>
                            <Card>
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
                                    <Info
                                        stopsAmount={stopsAmount}
                                        timeConvert={timeConvert}
                                        sliceTime={sliceTime}
                                        origin={item.origin}
                                        destination={item.destination}
                                        date={item.date}
                                        duration={item.duration}
                                        stops={item.stops}
                                    />
                                </Card.Body>
                            </Card>
                        </div>
                        : null
                ))
            }
        </Styles>
    )
}

export default Ticket;