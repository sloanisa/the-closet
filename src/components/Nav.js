import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Main from './Main';
import Admin from './Admin';
import NotFound from './NotFound';
import CartObject from './CartObject';
import CartPage from './CartPage';

class Nav extends Component {

  render() {
    return (
      <Router>
      <React.Fragment>
      <div className="menu-container">
              <Link to="/"><h1>THE CLOSET</h1></Link>
              <Link to="/admin"><h3>ADMIN</h3></Link>
              <Link to="/cart"><CartObject /></Link>
      </div>
      <Link to="/"></Link>
    </React.Fragment>
    <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/admin" component={Admin} />
        <Route path="/cart" component={CartPage} />
        <Route component={NotFound} />
      </Switch>
  </Router>
    );
  }
}

export default Nav;