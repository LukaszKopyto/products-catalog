import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Button from '../button/Button';
import Search from '../search/Search';
import { AppRoute } from '../../../routing/AppRoute.enum';

export const Container = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  padding: 48px 108px;
  background: #ffffff;
  min-width: 328px;
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
  const history = useHistory();

  const handleClick = () => history.push(AppRoute.login);

  return (
    <Container>
      <Logo>join.tsh.io</Logo>
      <Search />
      <Button text="Log in" ghost onClick={handleClick} />
    </Container>
  );
};

export default Header;
