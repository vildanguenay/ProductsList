import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductsList from 'components/ProductsList/ProductsList';

// Styles
import styles from 'pages/App/App.scss';
import Header from 'components/Header';
// import Home from 'pages/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <p>waaaaaaaaaaaaaaaaaz</p>
          <Header projectName="ProductsList" />
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
