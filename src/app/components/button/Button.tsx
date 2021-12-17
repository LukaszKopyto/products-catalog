import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

export const ButtonWrapper = styled.button`
  font-size: 0.875rem;
  line-height: 1.15;
  padding: 11px 24px;
  background: ${({ theme }) => theme.primaryLight};
  color: ${({ theme }) => theme.white};
  border: ${({ theme }) => `1px solid ${theme.primaryLight}`};
  border-radius: 4px;
  height: 38px;
  width: 100%;
  text-decoration: none;
  white-space: nowrap;
  &:hover {
    background: ${({ theme }) => theme.primaryDark};
    border: ${({ theme }) => `1px solid ${theme.primaryDark}`};
  }
  &:disabled {
    background: ${({ theme }) => theme.grey4};
    border: ${({ theme }) => `1px solid ${theme.grey4}`};
  }
`;

export const GhostButtonWrapper = styled.button`
  font-size: 0.875rem;
  line-height: 1.15;
  padding: 11px 24px;
  background: transparent;
  color: ${({ theme }) => theme.primaryLight};
  border: ${({ theme }) => `1px solid ${theme.primaryLight}`};
  border-radius: 4px;
  height: 38px;
  margin-left: auto;
  text-decoration: none;
  white-space: nowrap;
  &:hover {
    background: ${({ theme }) => theme.primaryDark};
    border: ${({ theme }) => `1px solid ${theme.primaryDark}`};
    color: ${({ theme }) => theme.white};
  }
  &:disabled {
    background: ${({ theme }) => theme.grey4};
  }
  &:active {
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.primaryDark};
    background-size: 100%;
    transition: background 0s;
  }
`;

const Button = ({ text, ghost, onClick, isActive }: ButtonProps) => {
  if (ghost) {
    return (
      <GhostButtonWrapper type="button" onClick={onClick} disabled={isActive}>
        {text}
      </GhostButtonWrapper>
    );
  }
  return (
    <ButtonWrapper type="button" onClick={onClick} disabled={isActive}>
      {text}
    </ButtonWrapper>
  );
};

export default Button;
