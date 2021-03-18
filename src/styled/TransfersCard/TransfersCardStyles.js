import { Field } from 'formik';
import styled from 'styled-components';

export const StyledField = styled(Field)`
  margin-right: 20px;
  transform: scale(2);
`;

export const StyledText = styled.label`
  display: flex;
  justify-content: flex-start;
  text-decoration: none;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: #777777;
  padding: 8px 40px 8px 20px;
  : hover {
    background-color: #F1FCFF;
  }
  @media(max-width: 992px) {
    padding: 6px 40px 6px 20px;
  }
`;

export const Label = styled.div`
  padding: 15px 0 10px 20px;
  font-size: 13px;
  font-weight: 700;
  color: #777777;
`;

export const LeftSide = styled.div`
.card-body {
  height: 258px;
  padding: 0;
},
`;
