import { Dispatch, SetStateAction } from 'react';

export interface LightboxProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
