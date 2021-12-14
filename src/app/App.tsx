import React from 'react';

import { AppRoutes } from 'routing/AppRoutes';
import { GlobalStyle } from './globalStyles';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  );
};
