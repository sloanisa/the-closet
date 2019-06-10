import React from 'react';
import { render } from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Main from './components/Main';
import Nav from './components/Nav'
import NotFound from './components/NotFound';
import CartPage from './components/CartPage';

  render(
  <Router basename={process.env.PUBLIC_URL}>
    <React.Fragment>
      <Nav />
    </React.Fragment>

  <Switch>
      <Route exact path="/" component={Main} />
      {/* <Route path="/admin" component={Admin} /> */}
      <Route path="/cart" component={CartPage} />
      <Route component={NotFound} />
  </Switch>
</Router>,
    document.getElementById('app')
  );

serviceWorker.unregister();
