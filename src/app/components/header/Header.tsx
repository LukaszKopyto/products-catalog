import React from 'react';
import styled from 'styled-components';
import Button from '../button/Button';
import Search from '../search/Search';

export const Container = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  padding: 48px 108px;
  background: #ffffff;
  @media (max-width: 778px) {
    padding: 53px 24px 32px;
  }
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  line-height: 1.7;
  padding-right: 105px;
  @media (max-width: 778px) {
    padding-right: 75px;
  }
  @media (max-width: 320px) {
    padding-right: unset;
  }
`;

const Header = () => {
  return (
    <Container>
      <Logo>join.tsh.io</Logo>
      <Search />
      <Button text="Log in" />
    </Container>
  );
};

export default Header;
