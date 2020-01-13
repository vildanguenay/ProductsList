import { renderApp } from 'container';
import App from 'pages/App';

renderApp(App);

if (module.hot) {
  module.hot.accept(() => {
    renderApp(App);
  });
}
