import MainPageContainer from './components/MainPageContainer';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  background: #F3F7FA;
  padding: 20px 0;
  width: 960px;
`;

function App() {
  return (
    <Wrapper>
      <MainPageContainer />
    </Wrapper>
  )
}

export default App;