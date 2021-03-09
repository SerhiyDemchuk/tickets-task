import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Card from "react-bootstrap/esm/Card";
import Form from 'react-bootstrap/Form';

import Checkbox from "./Checkbox";

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

const StyledLink = styled(NavLink)`
    :hover {
        text-decoration: none;
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
                                <StyledLink to="/">
                                    <Checkbox
                                        checked={checked}
                                        onChange={handleCheckboxChange}
                                        text="Все"
                                    />
                                </StyledLink>
                                <StyledLink to="/0">
                                    <Checkbox
                                        onChange={handleCheckboxChange}
                                        checked={checked}
                                        text="Без пересадок"
                                    />
                                </StyledLink>
                                <StyledLink to="/1">
                                    <Checkbox
                                        checked={checked}
                                        onChange={handleCheckboxChange}
                                        text="1 пересадка"
                                    />
                                </StyledLink>
                                <StyledLink to="/2">
                                    <Checkbox
                                        checked={checked}
                                        onChange={handleCheckboxChange}
                                        text="2 пересадки"
                                    />
                                </StyledLink>
                                <StyledLink to="/3">
                                    <Checkbox
                                        checked={checked}
                                        onChange={handleCheckboxChange}
                                        text="3 пересадки"
                                    />
                                </StyledLink>
                            </label>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        </LeftSide>
    );
};

export default TransfersCard;