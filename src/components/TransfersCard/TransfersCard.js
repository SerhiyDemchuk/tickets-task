import React from 'react';
import { Field, Form, Formik } from 'formik';
// import { Form, Formik } from 'formik';
import Card from 'react-bootstrap/esm/Card';
// import { Form, Check, Group} from 'react-bootstrap/esm';

// import Checkbox from "./Checkbox";

import { LeftSide } from '../../styled/TransfersCard/TransfersCardStyles';
import { Link } from 'react-router-dom';

const TransfersCard = ({ history, toggleCheckbox, initialValues, checkboxOptions, ...props }) => (
    <LeftSide>
        <Card>
            <Card.Body>
                <Formik initialValues={initialValues}>
                    {formik => (
                        <Form>
                            {/* <Checkbox
                                name="checkboxOptions"
                                options={checkboxOptions}
                                label="КОЛИЧЕСТВО ПЕРЕСАДОК"
                                toggleCheckbox={toggleCheckbox}
                            /> */}
                            <div role="group" aria-labelledby="checkbox-group">
                                <label>

                                    <Field type="checkbox" name="checkboxNam" value="one" />
                                    <Link to="no_stops">

                                    </Link>
                                text
                                    </label>
                            </div>
                            <div>
                                <label>


                                    <Field onClick={() => history.push('/one_stop?')} type="checkbox" name="checkboxNam" value="two" />

                                    one_stop</label>
                            </div>
                            <div>
                                <label>

                                    <Field onClick={() => history.push('/three_stops')} type="checkbox" name="checkboxNam" value="three" />
                                    three_stops</label>
                            </div>
                            {/* <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group> */}
                        </Form>
                    )}
                </Formik>
            </Card.Body>
        </Card>
    </LeftSide>
)

export default TransfersCard;
