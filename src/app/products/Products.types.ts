export interface MetaTypes {
  currentPage: 1;
  itemCount: 0;
  itemsPerPage: 0;
  totalItems: 0;
  totalPages: 0;
}
export interface DataTypes {
  items: [];
  meta: MetaTypes;
  links: [];
}

export interface FetchedTypes {
  status: string;
  data: DataTypes | Record<string, never>;
}
