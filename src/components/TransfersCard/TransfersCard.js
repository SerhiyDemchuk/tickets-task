import React from 'react';
import { Form, Formik } from 'formik';
import Card from 'react-bootstrap/esm/Card';

import Checkbox from './Checkbox';

import { Label, LeftSide } from '../../styled/TransfersCard/TransfersCardStyles';

const TransfersCard = ({ toggleCheckbox, initialValues, checkboxOptions }) => (
    <LeftSide>
        <Card>
            <Card.Body>
                <Formik initialValues={initialValues}>
                    {formik => (
                        <Form>
                            <Label>КОЛИЧЕСТВО ПЕРЕСАДОК</Label>
                            <Checkbox
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
)

export default TransfersCard;
