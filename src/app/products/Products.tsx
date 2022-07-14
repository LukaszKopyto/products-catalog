import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
  const [loading, setLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const history = useHistory();

  const setPage = (currentPage: number) => {
    searchParams.set('page', currentPage.toString());
    history.push({ search: searchParams.toString() });
    setPageInfo({ ...pageInfo, currentPage });
  };

  useEffect(() => {
    const url = `https://join-tsh-api-staging.herokuapp.com/products?limit=8&${searchParams.toString()}`;
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setLoading(false);
        setItems(res.data.items);
        setPageInfo(res.data.meta);
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.error(error));
  }, [searchParams]);

  const products = items.map((item: ProductCardProps) => (
    <ProductCard key={item.id} {...item} setIsOpen={setIsOpen} />
  ));

  return (
    <>
      {isOpen && <Lightbox setIsOpen={setIsOpen} />}
      <Header />
      {loading && <Loader />}
      {items.length ? <Grid>{products}</Grid> : <IsEmpty />}
      {items.length ? (
        <Pagination pageInfo={pageInfo} setPageInfo={setPage} />
      ) : null}
    </>
  );
};
