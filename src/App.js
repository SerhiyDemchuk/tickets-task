import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Col, Row, Container } from 'react-bootstrap/esm';

import { Wrapper } from './styled/Styles';
import { MainPageContainer, TransfersCardContainer } from './components';

const App = () => (
    <Wrapper>
        <Container>
            <Row>
                <Col sm={6} md={5} lg={4} xl={4}>
                    <TransfersCardContainer />
                </Col>
                <Col sm={5} md={6} lg={8} xl={8}>
                    <Switch>
                        <Route exact path="/:filter?"
                            component={MainPageContainer}
                        />
                    </Switch>
                </Col>
            </Row>
        </Container>
    </Wrapper>
)

export default App;
