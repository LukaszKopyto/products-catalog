import { Dispatch, SetStateAction } from 'react';

export interface ProductCardProps {
  active: boolean;
  description: string;
  id: number;
  image: string;
  name: string;
  promo: boolean;
  rating: number;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
