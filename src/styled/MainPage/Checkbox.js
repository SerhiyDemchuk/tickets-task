import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  padding-bottom: 14px;
  fill: none;
  stroke: #2196F3;
  stroke-width: 2px;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: ${(props) => (props.checked ? 'white' : 'white')};
  border: 1px solid #777777;
  border-radius: 3px;
  transition: all 150ms;
  
  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  };
`
const Text = styled.span`
  margin-left: 8px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  color: #777777;
`;

const Styles = styled.div`
  cursor: pointer;
  padding: 5px 20px 5px 20px;
  : hover {
    background-color: #F1FCFF;
  }
`;

export const Checkbox = ({ url, text, className, checked, ...props }) => (
  <Styles>
    <Link to={`/${url}`}>
      <CheckboxContainer className={className}>
        <HiddenCheckbox checked={checked} {...props} />
        <StyledCheckbox checked={checked}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
      </CheckboxContainer>
      <Text>
        {text}
      </Text>
    </Link>
  </Styles>
);

export default Checkbox;
