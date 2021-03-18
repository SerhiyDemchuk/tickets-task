import React from 'react';

import { StyledLowerCol, StyledUpperCol, StyledRow } from '../../styled/Styles';

const Info = ({
  date,
  stops,
  origin,
  duration,
  destination,
  displayTransitTime,
  displayStopsAmount,
  displayDestinationTime
}) => (
  <StyledRow>
    <StyledUpperCol xs={3} sm={4} md={4} lg={4} xl={4}>{origin} - {destination}</StyledUpperCol>
    <StyledUpperCol xs={4} sm={4} md={4} lg={4} xl={4}>В ПУТИ</StyledUpperCol>
    <StyledUpperCol xs={5} sm={3} md={3} lg={3} xl={3}>{displayStopsAmount(stops)}</StyledUpperCol>

    <StyledLowerCol xs={3} sm={4} md={4} lg={4} xl={4}>{displayDestinationTime(date)}</StyledLowerCol>
    <StyledLowerCol xs={4} sm={4} md={4} lg={4} xl={4}>{displayTransitTime(duration)}</StyledLowerCol>
    <StyledLowerCol xs={5} sm={3} md={3} lg={4} xl={4}>{stops.join(', ')}</StyledLowerCol>
  </StyledRow>
)

export default Info;
