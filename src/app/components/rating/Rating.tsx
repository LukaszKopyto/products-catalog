import React from 'react';
import styled from 'styled-components';
import { ReactComponent as StarIcon } from '../../../assets/star.svg';
import { RatingProps } from './Rating.types';

const Star = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1rem);
  gap: 0.625rem;
  margin: 2rem 0 1.125rem 0;
  & .unmarked svg path {
    fill: transparent;
    stroke: ${({ theme }) => theme.grey3};
  }
  & .marked svg path {
    fill: ${({ theme }) => theme.secondaryColor};
    stroke: ${({ theme }) => theme.secondaryColor};
  }
`;

const Rating = ({ rating }: RatingProps) => (
  <Star>
    {Array.from(Array(5).keys()).map((item, index) => (
      <div key={item} className={index < rating ? 'marked' : 'unmarked'}>
        <StarIcon />
      </div>
    ))}
  </Star>
);

export default Rating;
