import React from 'react';
import { Form, Formik } from 'formik';
import Card from 'react-bootstrap/esm/Card';

import Checkbox from './Checkbox';

import { StyledCheckbox } from '../../styled/Styles';
import { TransfersLabel } from '../../styled/TransfersCard/TransfersCardStyles';

const TransfersCard = ({ toggleCheckbox, initialValues, checkboxOptions }) => (
    <StyledCheckbox>
        <Card.Body>
            <Formik initialValues={initialValues}>
                {formik => (
                    <Form>
                        <TransfersLabel>КОЛИЧЕСТВО ПЕРЕСАДОК</TransfersLabel>
                        <Checkbox
                            name="checkboxOptions"
                            options={checkboxOptions}
                            toggleCheckbox={toggleCheckbox}
                        />
                    </Form>
                )}
            </Formik>
        </Card.Body>
    </StyledCheckbox>
)

export default TransfersCard;
