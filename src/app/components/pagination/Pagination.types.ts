interface pageInfo {
  currentPage: number;
  itemCount: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}

export interface PaginationProps {
  pageInfo: pageInfo;
  setPageInfo: (currentPage: number) => void;
}
