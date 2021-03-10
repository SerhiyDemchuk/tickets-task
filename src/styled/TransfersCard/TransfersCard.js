import React from 'react';
import styled from 'styled-components';
import Card from "react-bootstrap/esm/Card";
import { Form, Formik } from 'formik';

import Checkbox from "./Checkbox";

export const LeftSide = styled.div`
.card-body {
    height: 258px;
    padding: 0;
}
`;

const TransfersCard = () => {
    const checkboxOptions = [
        { path: '/vse', key: 'Option1', value: 'Все' },
        { path: '/0', key: 'Option2', value: 'Без пересадки' },
        { path: '/1', key: 'Option3', value: '1 пересадка' },
        { path: '/2', key: 'Option4', value: '2 пересадки' },
        { path: '/3', key: 'Option5', value: '3 пересадки' }
    ]
    const initialValues = {
        checkboxOptions: []
    }

    return (
        <LeftSide>
            <Card>
                <Card.Body>
                    <Formik initialValues={initialValues}>
                        {formik => (
                            <Form>
                                <Checkbox
                                    label="КОЛИЧЕСТВО ПЕРЕСАДОК"
                                    name="checkboxOptions"
                                    options={checkboxOptions}
                                />
                            </Form>
                        )}
                    </Formik>
                </Card.Body>
            </Card>
        </LeftSide>
    );
};

export default TransfersCard;
