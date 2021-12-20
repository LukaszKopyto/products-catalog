import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Header from '../components/header/Header';
import ProductCard from '../components/productCard/ProductCard';
import { ProductCardProps } from '../components/productCard/ProductCard.types';
import Lightbox from '../components/lightbox/Lightbox';
import Pagination from '../components/pagination/Pagination';

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

const DefaultState = {
  currentPage: 1,
  itemCount: 0,
  itemsPerPage: 0,
  totalItems: 0,
  totalPages: 0,
};

export const Products = () => {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [pageInfo, setPageInfo] = useState(DefaultState);

  useEffect(() => {
    axios
      .get(
        `https://join-tsh-api-staging.herokuapp.com/products?limit=8&page=${pageInfo.currentPage}`,
      )
      .then((res) => {
        setItems(res.data.items);
        setPageInfo(res.data.meta);
      })
      .catch((error) => console.error(error));
  }, [pageInfo.currentPage]);

  const products = items.map((item: ProductCardProps) => (
    <ProductCard key={item.id} {...item} setIsOpen={setIsOpen} />
  ));

  return (
    <>
      {isOpen ? <Lightbox setIsOpen={setIsOpen} /> : null}
      <Header />
      <Grid>{products}</Grid>
      <Pagination
        currentPage={pageInfo.currentPage}
        totalPages={pageInfo.totalPages}
        pageInfo={pageInfo}
        setPageInfo={setPageInfo}
      />
    </>
  );
};
