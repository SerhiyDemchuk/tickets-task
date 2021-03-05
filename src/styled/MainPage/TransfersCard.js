import React, { useState } from 'react';
import styled from 'styled-components';

import Card from "react-bootstrap/esm/Card";
import Form from 'react-bootstrap/Form';
import Checkbox from "./Checkbox";
import { useParams } from 'react-router';

export const LeftSide = styled.div`
.form-label {
  padding-left: 20px;
  padding-top: 20px;
  font-size: 12px;
  font-weight: 700;
  color: #777777;
  text-align: left;
},
.card {
    width: 230px;
    @media ()
},
.card-body {
    height: 258px;
    padding: 0;
},
.form-group {
  display: flex;
  flex-direction: column;
}
`;

const TransfersCard = () => {
    const [checked, setChecked] = useState(false);
    const handleCheckboxChange = () => {
        setChecked(!checked);
    };

    return (
        <LeftSide>
            <Card>
                <Card.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>КОЛИЧЕСТВО ПЕРЕСАДОК</Form.Label>
                            <label>
                                <Checkbox
                                    checked={checked}
                                    onChange={handleCheckboxChange}
                                    text="Все"
                                    url="vse"
                                />
                                <Checkbox
                                    checked={checked}
                                    onChange={handleCheckboxChange}
                                    text="Без пересадок"
                                    url="bez_peresadok"
                                />
                                <Checkbox
                                    checked={checked}
                                    onChange={handleCheckboxChange}
                                    text="1 пересадка"
                                    url="1_peresadka"
                                />
                                <Checkbox
                                    checked={checked}
                                    onChange={handleCheckboxChange}
                                    text="2 пересадки"
                                    url="2_peresadki"
                                />
                                <Checkbox
                                    checked={checked}
                                    onChange={handleCheckboxChange}
                                    text="3 пересадки"
                                    url="3_peresadki"
                                />
                            </label>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        </LeftSide>
    );
};

export default TransfersCard;