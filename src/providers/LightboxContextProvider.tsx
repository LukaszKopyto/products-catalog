import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';
import { AppProvidersProps } from './AppProviders.types';

interface Con {
  img: string;
  altAttr: string;
  name: string;
  description: string;
  setImg?: Dispatch<SetStateAction<string>>;
  setAltAttr?: Dispatch<SetStateAction<string>>;
  setName?: Dispatch<SetStateAction<string>>;
  setDescription?: Dispatch<SetStateAction<string>>;
}

const defaultState = {
  img: '',
  altAttr: '',
  name: '',
  description: '',
};

export const LightboxContext = createContext(defaultState as Con);

const LightboxProvider = ({ children }: AppProvidersProps) => {
  const [img, setImg] = useState(defaultState.img);
  const [altAttr, setAltAttr] = useState(defaultState.altAttr);
  const [name, setName] = useState(defaultState.name);
  const [description, setDescription] = useState(defaultState.description);

  return (
    <LightboxContext.Provider
      value={{
        img,
        altAttr,
        name,
        description,
        setImg,
        setAltAttr,
        setName,
        setDescription,
      }}
    >
      {children}
    </LightboxContext.Provider>
  );
};

export default LightboxProvider;
