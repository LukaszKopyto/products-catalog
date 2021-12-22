import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Header from '../components/header/Header';
import ProductCard from '../components/productCard/ProductCard';
import { ProductCardProps } from '../components/productCard/ProductCard.types';
import Lightbox from '../components/lightbox/Lightbox';
import Pagination from '../components/pagination/Pagination';
import IsEmpty from '../components/isEmpty/IsEmpty';
import { SearchContext } from '../../providers/SearchProvider';
import Loader from '../components/loader/Loader';

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
  const [isEmpty, setIsEmpty] = useState(false);
  const [pageInfo, setPageInfo] = useState(DefaultState);
  const [loading, setLoading] = useState<boolean>(false);

  const { search, active, promo } = useContext(SearchContext);

  useEffect(() => {
    let url = `https://join-tsh-api-staging.herokuapp.com/products?limit=8&page=${pageInfo.currentPage}&search=${search}`;
    const activeQuery = `&active=${active}`;
    const promoQuery = `&promo=${promo}`;
    if (active) url += activeQuery;
    if (promo) url += promoQuery;
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        if (res.data.items.length) {
          setIsEmpty(false);
        } else {
          setIsEmpty(true);
        }
        setLoading(false);
        setItems(res.data.items);
        setPageInfo(res.data.meta);
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.error(error));
  }, [pageInfo.currentPage, search, active, promo]);

  const products = items.map((item: ProductCardProps) => (
    <ProductCard key={item.id} {...item} setIsOpen={setIsOpen} />
  ));

  return (
    <>
      {isOpen ? <Lightbox setIsOpen={setIsOpen} /> : null}
      <Header />
      {loading && <Loader />}
      {isEmpty ? <IsEmpty /> : <Grid>{products}</Grid>}
      {isEmpty ? null : (
        <Pagination
          currentPage={pageInfo.currentPage}
          totalPages={pageInfo.totalPages}
          pageInfo={pageInfo}
          setPageInfo={setPageInfo}
        />
      )}
    </>
  );
};
