import { Dispatch, SetStateAction } from 'react';

export interface CheckboxProps {
  name: string;
  value: boolean;
  set?: Dispatch<SetStateAction<true | false>>;
}
