import React from 'react';
import ReactDOM from 'react-dom';

import { AppProviders } from 'providers/AppProviders';
import { Theme } from 'providers/ThemeProvider';

import { App } from './app/App';
import * as serviceWorker from './serviceWorker';
import LightboxProvider from './providers/LightboxContextProvider';

ReactDOM.render(
  <LightboxProvider>
    <AppProviders>
      <Theme>
        <App />
      </Theme>
    </AppProviders>
  </LightboxProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
