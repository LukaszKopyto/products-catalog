import React from 'react';
import styled from 'styled-components';
import { CheckboxProps } from './Checkbox.types';

export const CheckboxInput = styled.label`
  display: block;
  position: relative;
  padding: 4px 0 0 35px;
  cursor: pointer;
  font-size: 0.875rem;
  line-height: 1.15;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-right: 32px;
  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  & .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 24px;
    width: 24px;
    background: #ffffff;
    border: ${({ theme }) => `1px solid ${theme.grey2}`};
    border-radius: 4px;
  }
  &:hover input ~ .checkmark {
    background-color: ${({ theme }) => theme.grey2};
  }
  & input:checked ~ .checkmark {
    background-color: ${({ theme }) => theme.primaryLight};
  }
  & .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }
  & input:checked ~ .checkmark:after {
    display: block;
  }
  & .checkmark:after {
    left: 7px;
    top: 3px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

const Checkbox = ({ name, value, set }: CheckboxProps) => {
  const handleChange = () => {
    set?.(!value);
  };

  return (
    <CheckboxInput htmlFor={name}>
      {name}
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={value}
        onChange={handleChange}
      />
      <span className="checkmark" />
    </CheckboxInput>
  );
};

export default Checkbox;
