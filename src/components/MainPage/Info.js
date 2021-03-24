import React from 'react';
import { Row } from 'react-bootstrap';

import { StyledLowerCol, StyledUpperCol } from '../../styled/Styles';

const Info = ({
  date,
  stops,
  origin,
  duration,
  displayTime,
  destination,
  displayStopsAmount,
}) => (
  <Row>
    <StyledUpperCol xs={5} sm={3} md={4} lg={4} xl={4}>{origin} - {destination}</StyledUpperCol>
    <StyledUpperCol xs={4} sm={4} md={3} lg={4} xl={4}>IN ROAD</StyledUpperCol>
    <StyledUpperCol xs={3} sm={5} md={5} lg={3} xl={4}>{displayStopsAmount(stops)}</StyledUpperCol>

    <StyledLowerCol xs={5} sm={3} md={4} lg={4} xl={4}>{displayTime(date, duration)}</StyledLowerCol>
    <StyledLowerCol xs={4} sm={4} md={3} lg={4} xl={4}>{displayTime(null, duration)}</StyledLowerCol>
    <StyledLowerCol xs={3} sm={5} md={5} lg={4} xl={4}>{stops.join(', ')}</StyledLowerCol>
  </Row>
);

export default Info;
