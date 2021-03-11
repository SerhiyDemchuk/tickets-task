import React from 'react';
import { Field } from 'formik';
import { Item, Label, Styles, Text } from '../../styled/TransfersCard/TransfersCardStyles';

const Checkbox = ({ label, name, options, ...rest }) =>
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

export default Checkbox;
