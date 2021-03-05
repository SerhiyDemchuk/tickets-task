
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

import Container from 'react-bootstrap/esm/Container';
import MainPageContainer from './components/MainPageContainer';
import TransfersCard from './styled/MainPage/TransfersCard';
import { Wrapper } from './styled/MainPage/Wrapper';

function App() {

  return (
    <Wrapper>
      <Container>
        <Row>
          <Col lg={4} xl={4}>
            <TransfersCard />
          </Col>
          <Col sm={12} md={12} lg={8} xl={8}>
            <MainPageContainer />
          </Col>
        </Row>
      </Container>
    </Wrapper>
  )
}

export default App;