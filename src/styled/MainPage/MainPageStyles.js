import { Card, Col, ToggleButtonGroup } from 'react-bootstrap';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
  margin-top: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  .row {
    padding: 15px 0 0 20px;
  }
`;

export const UpperCardBody = styled(Card.Body)`
  padding: 0;
  .card-img {
    width: 100px;
  }
  .card-title {
    color: #2196F3;
  }
`;

export const LowerCardBody = styled(Card.Body)`
  .row {
    padding: 8px 0 0;
  }
`;

export const UpperCol = styled(Col)`
  color: #ACBAC2;
  font-size: 14px;
  font-weight: 600;
`;

export const LowerCol = styled(Col)`
  color: #4A4A4A;
  font-size: 15px;
  font-weight: 500;
`;

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
  width: 100%;
  display: flex;
  align-items: baseline;
.btn {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
}
#button_1 {
  background-color: #2196F3;
},
#button_2 {
  border: #fff;
  color: black;
  background-color: #fff;
},
`;
