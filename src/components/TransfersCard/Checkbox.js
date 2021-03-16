import React from 'react';
import { Field } from 'formik';

import { Item, Label, Styles, Text } from '../../styled/TransfersCard/TransfersCardStyles';

const Checkbox = ({ asyncFilterByStopsAction, dispatch, toggleCheckbox, label, name, options, ...props }) => (
  <Styles>
    <Label>{label}</Label>
    <Field name={name}>
      {({ field }) => {
        return options.map(option => {
          return (
            <Item key={option.id} to={option.path}
              onClick={() => toggleCheckbox(option)}>
              <label htmlFor={option.id}>
                <input
                  type="checkbox"
                  id={option.id}
                  {...field}
                  value={option.value}
                  checked={option.checked}
                />
              </label>
              <Text htmlFor={option.key}>{option.value}</Text>
            </Item>
          )
        })
      }}
    </Field>
  </Styles>
)

export default Checkbox;
