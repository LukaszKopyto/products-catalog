import { Dispatch, SetStateAction } from 'react';

interface pageInfo {
  currentPage: number;
  itemCount: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}

export interface PaginationProps {
  currentPage: number;
  itemCount?: number;
  itemsPerPage?: number;
  totalItems?: number;
  totalPages: number;
  pageInfo: pageInfo;
  setPageInfo: Dispatch<
    SetStateAction<{
      currentPage: number;
      itemCount: number;
      itemsPerPage: number;
      totalItems: number;
      totalPages: number;
    }>
  >;
}
