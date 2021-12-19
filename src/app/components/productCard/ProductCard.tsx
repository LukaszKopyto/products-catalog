import React, { useContext } from 'react';
import styled from 'styled-components';
import { ProductCardProps } from './ProductCard.types';
import Button from '../button/Button';
import Rating from '../rating/Rating';
import { LightboxContext } from '../../../providers/LightboxContextProvider';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 8px;
  & img {
    width: 100%;
    height: auto;
    border-radius: 8px 8px 0 0;
  }
  & .card__info {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 1rem 1rem 1.5rem;
  }
  & .card__name {
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1rem;
    color: ${({ theme }) => theme.grey5};
    margin-bottom: 0.5rem;
  }
  & .card__description {
    flex-grow: 1;
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1rem;
    color: ${({ theme }) => theme.grey4};
  }
`;

const ProductCard = (product: ProductCardProps) => {
  const { image, description, name, active, rating, setIsOpen } = product;
  const { setImg, setAltAttr, setName, setDescription } =
    useContext(LightboxContext);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleClick = () => {
    setImg?.(image);
    setAltAttr?.(name);
    setName?.(name);
    setDescription?.(description);
    setIsOpen(true);
  };

  return (
    <CardWrapper>
      <img src={image} alt={name} />
      <div className="card__info">
        <div className="card__name">{name}</div>
        <div className="card__description">{description}</div>
        <Rating rating={rating} />
        <Button
          text={active ? 'Show details' : 'Unavailable'}
          onClick={handleClick}
          isActive={!active}
        />
      </div>
    </CardWrapper>
  );
};

export default ProductCard;
