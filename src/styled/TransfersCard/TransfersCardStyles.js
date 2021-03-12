import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Styles = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.label`
  text-decoration: none;
  margin-left: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: #777777;
`;

export const Item = styled(NavLink)`
  cursor: pointer;
  padding: 5px 20px 5px 20px;
  : hover {
    background-color: #F1FCFF;
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
.card {
  @media(max-width: 768px) {
    width: 250px;
    margin-bottom: 10px;
  },
  @media(max-width: 576px) {
    width: 250px;
  }
}
`;
