import React from 'react';
import styled from 'styled-components';
import { PaginationProps } from './Pagination.types';

const PaginationWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, max-content);
  justify-content: center;
  gap: 0.375rem;
  grid-auto-flow: column;
  padding: 0 108px 100px;
  & .pagination__link {
    text-align: center;
    padding: 0.125rem 0.313rem;
    border: 0;
    border-radius: 0.25rem;
    &:hover {
      background: ${({ theme }) => theme.grey2};
    }
  }
  & .pagination__link--first {
    margin-right: 1rem;
  }
  & .pagination__link--last {
    margin-left: 1rem;
  }
  & .active {
    color: ${({ theme }) => theme.primaryLight};
  }
`;

const Pagination = ({
  currentPage,
  totalPages,
  pageInfo,
  setPageInfo,
}: PaginationProps) => {
  const arr = Array.from(Array(totalPages).keys());

  let start = [];
  if (currentPage >= totalPages - 4) {
    start = arr.slice(-5, totalPages - 2);
  } else {
    start = arr.slice(
      currentPage === 1 ? currentPage : currentPage - 1,
      currentPage === 1 ? currentPage + 3 : currentPage + 2,
    );
  }

  const end = arr.slice(-2, totalPages);
  end.push(totalPages);

  const newArr =
    currentPage >= totalPages - 4
      ? ['...', ...start, ...end]
      : [...start, '...', ...end];

  let links = [];
  if (totalPages <= 6) {
    links = arr.map((item) => {
      return (
        <button
          type="button"
          key={item}
          className={
            currentPage === item + 1
              ? 'pagination__link active'
              : 'pagination__link'
          }
          onClick={() => setPageInfo({ ...pageInfo, currentPage: item + 1 })}
        >
          {item + 1}
        </button>
      );
    });
  } else {
    links = newArr.map((item) => {
      const button = (
        <button
          type="button"
          key={item}
          className={
            currentPage === item
              ? 'pagination__link active'
              : 'pagination__link'
          }
          onClick={
            typeof item === 'number'
              ? () => setPageInfo({ ...pageInfo, currentPage: item })
              : undefined
          }
        >
          {item}
        </button>
      );
      const dots = <div key={item}>...</div>;
      return typeof item === 'number' ? button : dots;
    });
  }

  return (
    <>
      <PaginationWrapper>
        <button
          type="button"
          className="pagination__link pagination__link--first"
          onClick={() => setPageInfo({ ...pageInfo, currentPage: 1 })}
        >
          First
        </button>
        {links}
        <button
          type="button"
          className="pagination__link pagination__link--last"
          onClick={() =>
            setPageInfo({ ...pageInfo, currentPage: pageInfo.totalPages })
          }
        >
          Last
        </button>
      </PaginationWrapper>
    </>
  );
};

export default Pagination;
