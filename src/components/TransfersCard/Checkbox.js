import React from 'react';
import { FieldArray } from 'formik';

import {
  CheckboxDiv,
  CheckboxText,
  CheckboxField
} from '../../styled/TransfersCard/TransfersCardStyles';

const Checkbox = ({ onToggleCheckbox, name, options }) => (
  <FieldArray
    render={array => (
      <div>
        {options.map(item => (
          <CheckboxDiv
            key={item.id}
            onChange={() => onToggleCheckbox(item)}
          >
            <CheckboxText
              className="form-check-label"
            >
              <CheckboxField
                name={name}
                type="checkbox"
                value={item.value}
                checked={item.checked}
              />
              {item.value}
            </CheckboxText>
          </CheckboxDiv>
        ))}
      </div>
    )}
  />
);

export default Checkbox;
