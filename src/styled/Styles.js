import styled from 'styled-components';
import { UpperCol, LowerCol } from './MainPage/MainPageStyles';
import { CheckboxCard } from './TransfersCard/TransfersCardStyles';

export const Wrapper = styled.div`
  margin: 0 auto;
  padding-top: 20px;
  max-width: 960px;
  min-height: 969px;
  .card {
    border-radius: 10px;
  };
`;

export const StyledUpperCol = styled(UpperCol)`
  @media(max-width: 991px) {
    font-size: 0.8rem;
  };
`;

export const StyledLowerCol = styled(LowerCol)`
  @media(max-width: 991px) {
    font-size: 0.8rem;
  };
`;

export const StyledCheckbox = styled(CheckboxCard)`
  @media(max-width: 575px) {
    margin: 20px auto;
  };
  @media(max-width: 767px) {
    font-size: 0.8rem;
  };
`;