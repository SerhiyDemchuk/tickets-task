import { Row } from 'react-bootstrap';
import styled from 'styled-components';
import { UpperCol, LowerCol } from './MainPage/MainPageStyles';

export const Wrapper = styled.div`
  margin: 0 auto;
  padding-top: 20px;
  max-width: 960px;
  min-height: 969px;
  // @media(max-width: 992px) {
  //   .card {
  //     height: 200px;
  //     font-size: 10px;
  //   }
  // }
`;

export const StyledRow = styled(Row)`
  @media(max-width: 576px) {
    .card-title {
      font-size: 11px;
    }
  },
  @media(max-width: 768px) {
    .card-title {
      font-size: 15px;
    }
  }
`;

export const StyledUpperCol = styled(UpperCol)`
  @media(max-width: 992px) {
    max-height: 30px;
    // font-size: 10px;
    padding: 0;
  }
`;

export const StyledLowerCol = styled(LowerCol)`
  @media(max-width: 576px) {
    // font-size: 9px;
    padding: 0;  
  },
  @media(max-width: 992px) {
    max-height: 30px;
    font-size: 99px;
    padding: 0;
  }
`;

// export const GlobalStyledTicket = styled(StyledTicket)`
//   @media(max-width: 576px) {
//     .row {
//       padding: 5px 0 0 20px;
//     }
//   }
//   @media(max-width: 768px) {
//     .card-title {
//       font-size: 18px;
//     }
//     .col {
//       max-height: 50px;
//     }
//   }
// `;