import React from 'react';
import { Card, Col, Row } from 'react-bootstrap/esm';

import { StyledUpperCol } from '../../styled/Styles';
import { LowerCardBody, TicketCard, UpperCardBody } from '../../styled/MainPage/MainPageStyles';

import Info from './Info';


const Ticket = ({
    price,
    displayPrice,
    segments = [],
    displayStopsAmount,
    displayTransitTime,
    displayDestinationTime
}) => (
    <TicketCard>
        <UpperCardBody>
            <Row>
                <StyledUpperCol xs={7} sm={5} md={7} lg={8} xl={8}>
                    <Card.Title>{displayPrice(price)}</Card.Title>
                </StyledUpperCol>
                <Col xs={5} sm={5} md={5} lg={4} xl={1}>
                    <Card.Img
                        src="https://bit.ly/37Y4YHu">
                    </Card.Img>
                </Col>
            </Row>
        </UpperCardBody>
        {
            segments.map((item, index) => (
                <LowerCardBody key={index}>
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
                </LowerCardBody>
            ))
        }
    </TicketCard>
)

export default Ticket;
