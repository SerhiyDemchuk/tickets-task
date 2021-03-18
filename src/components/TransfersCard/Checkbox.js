import React from 'react';
import { FieldArray } from 'formik';

import {
  StyledText,
  StyledField,
  Styled
} from '../../styled/TransfersCard/TransfersCardStyles';

const Checkbox = ({ toggleCheckbox, name, options }) => (
  <FieldArray
    render={array => (
      <div>
        {options.map(item => (
          <Styled
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
          </Styled>
        ))}
      </div>
    )}
  />
)

export default Checkbox;
