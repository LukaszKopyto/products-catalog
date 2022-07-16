import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Header from '../components/header/Header';
import ProductCard from '../components/productCard/ProductCard';
import { ProductCardProps } from '../components/productCard/ProductCard.types';
import Lightbox from '../components/lightbox/Lightbox';
import Pagination from '../components/pagination/Pagination';
import IsEmpty from '../components/isEmpty/IsEmpty';
import Loader from '../components/loader/Loader';
import { useSearchParams } from '../hooks/useSearchParams';
import { useFetch } from '../hooks/useFetch';
import { FetchedTypes } from './Products.types';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 2rem 1.5rem;
  margin: 56px 108px;
  @media (max-width: 778px) {
    margin: 56px 24px;
  }
`;

export const Products = () => {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const history = useHistory();

  const setPage = (currentPage: number) => {
    searchParams.set('page', currentPage.toString());
    history.push({ search: searchParams.toString() });
  };
  const URL = `https://join-tsh-api-staging.herokuapp.com/products?limit=8&${searchParams.toString()}`;
  const { status, data }: FetchedTypes = useFetch(URL);
  const { items = [], meta } = data;

  const products = items.map((item: ProductCardProps) => (
    <ProductCard key={item.id} {...item} setIsOpen={setIsOpen} />
  ));

  const showProducts = (
    <>
      <Grid>{products}</Grid>
      <Pagination pageInfo={meta} setPageInfo={setPage} />
    </>
  );
  return (
    <>
      {isOpen && <Lightbox setIsOpen={setIsOpen} />}
      <Header />
      {status === 'FETCHING' && <Loader />}
      {status === 'FETCHED' && !items.length && <IsEmpty />}
      {items.length && showProducts}
    </>
  );
};
