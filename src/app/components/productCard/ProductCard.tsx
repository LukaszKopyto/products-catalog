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
  position: relative;
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
  & .card__promo {
    position: absolute;
    top: 16px;
    left: 0;
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.143;
    background: ${({ theme }) => theme.secondaryColor};
    color: ${({ theme }) => theme.white};
    padding: 0.25rem 1rem;
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
  const { image, description, name, active, rating, promo, setIsOpen } =
    product;
  const { setImg, setAltAttr, setName, setDescription } =
    useContext(LightboxContext);

  const handleClick = () => {
    setImg?.(image);
    setAltAttr?.(name);
    setName?.(name);
    setDescription?.(description);
    setIsOpen(true);
  };

  return (
    <CardWrapper>
      {promo && <div className="card__promo">Promo</div>}
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
