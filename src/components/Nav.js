import React, { Component } from 'react';
import CartObject from './CartObject';

class Nav extends Component {

  render() {
    return (
    <React.Fragment>
      <div className="menu-container">
              <Link to="/"><h1>THE CLOSET</h1></Link>
              <Link to="/admin"><h3>ADMIN</h3></Link>
              <Link to="/cart"><CartObject /></Link>
      </div>
    </React.Fragment>

    );
  }
}

export default Nav;