import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';
import { AppProvidersProps } from './AppProviders.types';

interface Con {
  search: string;
  active: boolean;
  promo: boolean;
  setSearch?: Dispatch<SetStateAction<string>>;
  setActive?: Dispatch<SetStateAction<boolean>>;
  setPromo?: Dispatch<SetStateAction<boolean>>;
}

const defaultState = {
  search: '',
  active: false,
  promo: false,
};

export const SearchContext = createContext(defaultState as Con);

const SearchProvider = ({ children }: AppProvidersProps) => {
  const [search, setSearch] = useState(defaultState.search);
  const [active, setActive] = useState(defaultState.active);
  const [promo, setPromo] = useState(defaultState.promo);

  return (
    <SearchContext.Provider
      value={{
        search,
        active,
        promo,
        setSearch,
        setActive,
        setPromo,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
