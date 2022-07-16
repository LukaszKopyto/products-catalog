interface PageInfo {
  currentPage: number;
  itemCount: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}

export interface PaginationProps {
  pageInfo: PageInfo;
  setPageInfo: (currentPage: number) => void;
}
