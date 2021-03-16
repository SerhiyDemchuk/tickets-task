import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  background: #F3F7FA;
  max-width: 960px;
  min-height: 969px;
  @media(max-width: 576px) {
    padding-left: 20px;
  }
  .card {
    @media(max-width: 768px) {
      width: 250px;
      margin-bottom: 10px;
    }
    @media(max-width: 576px) {
      width: 250px;
    }
  }
  .container {
    background: #F3F7FA;
    margin: 0 auto;
    padding: 20px 100px;
    @media(max-width: 768px) {
      padding: 20px 50px 20px 0;
    };
  }
`;
