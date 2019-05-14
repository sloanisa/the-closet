import React from 'react';
import { render } from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Main from './components/Main';
import Admin from './components/Admin';
import NotFound from './components/NotFound';
import CartObject from './components/CartObject';
import CartPage from './components/CartPage';


// const dataUrl = './store-items.json';

  render(
    <Router>
    <React.Fragment>
    <div className="menu-container">
            <Link to="/"><h1>THE CLOSET</h1></Link>
            <Link to="/admin"><h3>ADMIN</h3></Link>
            <Link to="/cart"><CartObject /></Link>
    </div>
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
