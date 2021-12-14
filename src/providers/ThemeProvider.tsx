import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { AppProvidersProps } from './AppProviders.types';

declare module 'styled-components' {
  export interface DefaultTheme {
    primaryLight: string;
    primaryDark: string;
    secondaryColor: string;
    grey1: string;
    grey2: string;
    grey3: string;
    grey4: string;
    grey5: string;
  }
}

const theme: DefaultTheme = {
  primaryLight: '#4460F7',
  primaryDark: '#2140E8',
  secondaryColor: '#F9A52B',
  grey1: '#F0F1F5',
  grey2: '#E0E2EA',
  grey3: '#B9BDCF',
  grey4: '#9194A5',
  grey5: '#1A1B1D',
};

export const Theme = ({ children }: AppProvidersProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
