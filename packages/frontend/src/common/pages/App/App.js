import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductsList from 'components/ProductsList/ProductsList';

// Styles
import styles from 'pages/App/App.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <main id="main" className={styles.main}>
            <Switch>
              <Route exact path="/" component={ProductsList} />
            </Switch>
          </main>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
