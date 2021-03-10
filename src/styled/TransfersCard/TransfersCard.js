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

const TransfersCard = ({ initialValues, checkboxOptions, ...props }) => {
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
