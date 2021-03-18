import { Field } from 'formik';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

export const StyledField = styled(Field)`
  margin: 0 20px;
  transform: scale(2);
`;

export const Styled = styled.div`
display: flex;
align-items: center;  
justify-content: flex-start;
padding: 8px;
cursor: pointer;
: hover {
  background-color: #F1FCFF;
}

`;

export const StyledText = styled.label`
  cursor: pointer;
  font-weight: 500;
  color: #777777;

  // @media(max-width: 992px) {
  //   padding: 6px 40px 6px 20px;
  // }
`;

export const Label = styled.div`
  margin: 20px 20px 10px;
  color: #777777;
  font-size: 13px;
  font-weight: 700;
`;

export const StyledCard = styled(Card)`
  height: 258px;
  width: 100%;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  .card-body {
    padding: 0;
  }
`;