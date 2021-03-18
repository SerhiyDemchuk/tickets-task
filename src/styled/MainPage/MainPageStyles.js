import styled from 'styled-components';

export const UpperColText = styled.div`
  color: #ACBAC2;
  margin-top: 15px;
  font-size: 14px;
  font-weight: 600;
  @media (max-width: 992px) {
    font-size: 11px;
  },
  @media (max-width: 768px) {
    margin: 0;
    font-size: 6px;
  }
`;

export const Title = styled.div`
  .card-title {
    color: #2196F3;
  }
`;

export const LowerColText = styled.div`
  color: #4A4A4A;
  font-size: 15px;
  font-weight: 500;
  @media(max-width: 992px) {
    font-size: 13px;
  }
`;

export const Button = styled.div`
#button_1 {
    background-color: #2196F3;
    font-size: 15px;
    font-weight: 600;
},
#button_2 {
    background-color: #fff;
    border: #fff;
    color: black;
    font-size: 15px;
    font-weight: 600;
},
.btn-group-toggle {
  width: 100%;
  @media(width: 992px) {
    width: 50%;
  };
  @media(max-width: 768px) {
    width: 250px;
  };
}
`;
