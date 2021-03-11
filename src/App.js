import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import { Route, Switch } from 'react-router-dom';

import { MainPageContainer, TransfersCardContainer } from './components';
import { Wrapper } from './styled/Styles';

const App = () =>
    <Wrapper>
        <Container>
            <Row>
                <Col lg={4} xl={4}>
                    <TransfersCardContainer />
                </Col>
                <Col sm={12} md={12} lg={8} xl={8}>
                    <Switch>
                        <Route path="/:filter?"
                            component={MainPageContainer}
                        />
                    </Switch>
                </Col>
            </Row>
        </Container>
    </Wrapper>

export default App;
