import React from 'react';

import Card from 'react-bootstrap/esm/Card';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

import InfoCard from './InfoCard';
import { Styles } from './Styles';
import { Title } from './Title';

const MainInfo = () => {
    return (
        <Styles>
            <Card>
                <Card.Body>
                    <Row>
                        <Col xs={6} sm={7} md={7} lg={8} xl={8}>
                            <Title>
                                <Card.Title>13 400 P</Card.Title>
                            </Title>
                        </Col>
                        <Col xs={5} sm={5} md={5} lg={4} xl={4}>
                            <Card.Img
                                style={{ width: '110px', height: '35px' }}
                                src="https://bit.ly/37Y4YHu">
                            </Card.Img>
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Body>
                    <InfoCard
                        column="upper"
                        fromTo="MOW - HKT"
                        transfersAmount="2 ПЕРЕСАДКИ"
                    />
                    <InfoCard
                        column="lower"
                        startsAt="10:45 - 08:00"
                        timeInRoad="21ч 15м"
                        transfer="HKG, JNB"
                    />
                    <InfoCard
                        column="upper"
                        fromTo="MOW - HKT"
                        transfersAmount="1 ПЕРЕСАДКА"
                    />
                    <InfoCard
                        column="lower"
                        startsAt="11:25 - 00:50"
                        timeInRoad="13ч 30м"
                        transfer="HKG"
                    />
                </Card.Body>
            </Card>
        </Styles>
    )
}

export default MainInfo;