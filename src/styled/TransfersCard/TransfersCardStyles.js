import { Field } from 'formik';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

export const CheckboxField = styled(Field)`
  margin: 0 20px 0 0;
  transform: scale(2);
`;

export const CheckboxDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0 8px 20px;
  justify-content: flex-start;
  cursor: pointer;
  :hover {
    background-color: #F1FCFF;
  };
`;

export const CheckboxText = styled.label`
  cursor: pointer;
  font-weight: 500;
  color: #777777;
`;

export const TransfersLabel = styled.div`
  margin: 0 0 9px 15px;
  color: #777777;
  font-size: 13px;
  font-weight: 700;
`;

export const CheckboxCard = styled(Card)`
  max-width: 255px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  .card-body {
    padding: 20px 0;
  };
`;