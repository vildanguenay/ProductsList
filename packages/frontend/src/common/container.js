import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'wicg-inert';

const rootElement = document.getElementById('root');
export const renderApp = AppComponent => {
  render(
    <AppContainer>
      <AppComponent />
    </AppContainer>,
    rootElement,
  );
};
