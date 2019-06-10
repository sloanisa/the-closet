import React, { Component } from 'react';
import { formatPrice } from '../utilities';

class CartItems extends Component {

  remove = (event) => {
    console.log(event.currentTarget.value);
  };

  render() {
    const {name, price, count} = this.props.details;
    return (
      <div className="cart-items"> 
        <div className="cart-items-indiv">
         <h3>{name} ({count})</h3>
         <p>{formatPrice(price)}</p>
        </div>
      </div>
    );
  }
}

export default CartItems;