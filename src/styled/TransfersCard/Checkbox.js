import React from 'react';
import styled from 'styled-components';
import { Field } from 'formik';
import { NavLink } from 'react-router-dom';

const Text = styled.label`
  text-decoration: none;
  margin-left: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: #777777;
`;

const Styles = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled(NavLink)`
  cursor: pointer;
  padding: 5px 20px 5px 20px;
  : hover {
    background-color: #F1FCFF;
  }
`;

const Label = styled.div`
  padding: 15px 0 10px 20px;
  font-size: 13px;
  font-weight: 700;
  color: #777777;
`;

const Checkbox = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <Styles>
      <Label>{label}</Label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map(option => {
            return (
              <Item key={option.key} to={option.path}>
                <input
                  type="checkbox"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                <Text htmlFor={option.key}>{option.value}</Text>
              </Item>
            )
          })
        }}
      </Field>
    </Styles>
  )
};

export default Checkbox;
