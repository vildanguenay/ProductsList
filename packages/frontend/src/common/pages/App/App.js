import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Heading, Icon, Content } from '@xxxlgroup/hydra-ui-components';
// Styles
import styles from 'pages/App/App.scss';
import Header from 'components/Header';
import Home from 'pages/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <p>waaaaaaaaaaaaaaaaaz</p>
          <Header projectName="ProductsList" />
          <main id="main" className={styles.main}>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </main>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
