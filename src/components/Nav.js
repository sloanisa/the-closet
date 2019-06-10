import React, { Component } from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import CartObject from './CartObject';

class Nav extends Component {

  render() {
    return (
    <React.Fragment>
      <div className="menu-container">
              <Link to="/"><h1>THE CLOSET</h1></Link>
              <Link activeClass="active" to="inventory" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}><h3>ADMIN</h3></Link>
              <Link activeClass="active" to="cart" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}><CartObject /></Link>
      </div>
    </React.Fragment>

    );
  }
}

export default Nav;