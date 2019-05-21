import React from 'react';
import { render } from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Main from './components/Main';
import Nav from './components/Nav'
import Admin from './components/Admin';
import NotFound from './components/NotFound';
import CartObject from './components/CartObject';
import CartPage from './components/CartPage';


// const dataUrl = './store-items.json';

  render(
  <Router basename={process.env.PUBLIC_URL}>
    <React.Fragment>
      <Nav />
    </React.Fragment>

  <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/admin" component={Admin} />
      <Route path="/cart" component={CartPage} />
      <Route component={NotFound} />
  </Switch>
</Router>,
    document.getElementById('app')
  );

serviceWorker.unregister();
