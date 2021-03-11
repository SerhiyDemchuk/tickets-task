import React from 'react';
import Card from 'react-bootstrap/esm/Card';
import { Form, Formik } from 'formik';

import Checkbox from "./Checkbox";
import { LeftSide } from '../../styled/TransfersCard/TransfersCardStyles';

const TransfersCard = ({ toggleCheckbox, initialValues, checkboxOptions }) =>
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
                                toggleCheckbox={toggleCheckbox}
                            />
                        </Form>
                    )}
                </Formik>
            </Card.Body>
        </Card>
    </LeftSide>

export default TransfersCard;
