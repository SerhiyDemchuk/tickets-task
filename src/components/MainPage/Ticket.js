import React from 'react';
import { Card, Col } from 'react-bootstrap/esm';
import { LowerCardBody, StyledCard, UpperCardBody } from '../../styled/MainPage/MainPageStyles';

import { StyledRow, StyledUpperCol } from '../../styled/Styles';

import Info from './Info';


const Ticket = ({
    price,
    displayPrice,
    segments = [],
    displayStopsAmount,
    displayTransitTime,
    displayDestinationTime
}) => (
    <StyledCard>
        <UpperCardBody>
            <StyledRow>
                <StyledUpperCol xs={3} sm={5} md={5} lg={8} xl={8}>
                    <Card.Title>{displayPrice(price)}</Card.Title>
                </StyledUpperCol>
                <Col xs={5} sm={5} md={5} lg={4} xl={1}>
                    <Card.Img
                        src="https://bit.ly/37Y4YHu">
                    </Card.Img>
                </Col>
            </StyledRow>
        </UpperCardBody>
        <LowerCardBody>
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
        </LowerCardBody>
    </StyledCard>
)

export default Ticket;
