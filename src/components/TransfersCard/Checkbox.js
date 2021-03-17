import React from 'react';
import { FieldArray } from 'formik';

import {
  StyledText,
  StyledField
} from '../../styled/TransfersCard/TransfersCardStyles';

const Checkbox = ({ toggleCheckbox, name, options }) => (
  <FieldArray
    render={array => (
      <div>
        {options.map(item => (
          <div
            key={item.id}
            onChange={() => toggleCheckbox(item)}
          >
            <StyledText
              className="form-check-label"
            >
              <StyledField
                name={name}
                type="checkbox"
                value={item.value}
                checked={item.checked}
              />
              {item.value}
            </StyledText>
          </div>
        ))}
      </div>
    )}
  />
)

export default Checkbox;
