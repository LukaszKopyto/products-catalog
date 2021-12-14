import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { ReactComponent as MagnifierIcon } from '../../../assets/magnifier.svg';
import Checkbox from '../checkbox/Checkbox';

export const SearchInput = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 1075px) {
    order: 2;
    margin-top: 29px;
  }
  & .search__input {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 320px;
    padding: 0 0 0 16px;
    background: #ffffff;
    border: ${({ theme }) => `1px solid ${theme.grey2}`};
    border-radius: 8px;
    margin-right: 24px;
    @media (max-width: 778px) {
      min-width: unset;
    }
    @media (max-width: 527px) {
      width: 100%;
      margin-right: unset;
      flex-basis: 100%;
    }
    & input {
      font-size: 0.875rem;
      line-height: 1.15;
      color: ${({ theme }) => theme.grey5};
      border: none;
      width: 100%;
      height: 100%;
    }
    & .search__icon {
      height: 47px;
      padding: 0 15px;
      border: 0;
      background: transparent;
      display: flex;
      align-items: center;
      &:active {
        background-color: ${({ theme }) => theme.grey1};
        background-size: 100%;
        transition: background 0s;
      }
    }
  }
  & .search__checkboxes {
    display: flex;
    @media (max-width: 527px) {
      margin-top: 24px;
    }
  }
`;

const Search = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleSearch = () => {
    console.warn('🚀 ➡️', value);
  };

  return (
    <SearchInput>
      <div className="search__input">
        <input
          type="text"
          placeholder="Search..."
          value={value}
          onChange={handleOnChange}
        />
        <button type="button" className="search__icon" onClick={handleSearch}>
          <MagnifierIcon />
        </button>
      </div>
      <div className="search__checkboxes">
        <Checkbox name="Active" />
        <Checkbox name="Promo" />
      </div>
    </SearchInput>
  );
};

export default Search;
