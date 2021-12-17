import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Header from '../components/header/Header';
import ProductCard from '../components/productCard/ProductCard';
import { ProductCardProps } from '../components/productCard/ProductCard.types';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 2rem 1.5rem;
  margin: 56px 108px;
  @media (max-width: 778px) {
    margin: 56px 24px;
  }
`;

export const Products = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get('https://join-tsh-api-staging.herokuapp.com/products?limit=8&page=1')
      .then((res) => {
        setItems(res.data.items);
      })
      .catch((error) => console.error(error));
  }, []);

  const products = items.map((item: ProductCardProps) => (
    <ProductCard key={item.id} {...item} />
  ));

  return (
    <>
      <Header />
      <Grid>{products}</Grid>
    </>
  );
};
