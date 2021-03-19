import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Col, Row, Container } from 'react-bootstrap/esm';

import { Wrapper } from './styled/Styles';
import { MainPageContainer, TransfersCardContainer } from './components';

const App = () => (
    <Wrapper>
        <Container>
            <Row>
                <Col sm={4} md={4} lg={4} xl={3}>
                    <TransfersCardContainer />
                </Col>
                <Col sm={8} md={8} lg={8} xl={9}>
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
