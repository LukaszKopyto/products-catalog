import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

export const ButtonWrapper = styled.button`
  font-size: 0.875rem;
  line-height: 1.15;
  padding: 11px 24px;
  background: transparent;
  color: ${({ theme }) => theme.primaryLight};
  border: ${({ theme }) => `1px solid ${theme.primaryLight}`};
  border-radius: 4px;
  height: 38px;
  margin-left: auto;
  white-space: nowrap;
  &:hover {
    border: ${({ theme }) => `1px solid ${theme.primaryDark}`};
    color: ${({ theme }) => theme.primaryDark};
  }
  &:disabled {
    border: ${({ theme }) => `1px solid ${theme.grey4}`};
    color: ${({ theme }) => theme.grey4};
  }
  &:active {
    background-color: ${({ theme }) => theme.primaryDark};
    color: white;
    background-size: 100%;
    transition: background 0s;
  }
`;

const Button = ({ text }: ButtonProps) => {
  return <ButtonWrapper type="button">{text}</ButtonWrapper>;
};

export default Button;
