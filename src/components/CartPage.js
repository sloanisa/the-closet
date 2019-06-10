import React, { Component } from 'react';
import CartItems from './CartItems';
import { formatPrice } from '../utilities';

class CartPage extends Component {

  totalPrice = (sum) => {
    console.log(sum)
    const currentTotal = { ...this.state.totalCost};

    currentTotal = currentTotal + sum;
    this.setState({totalCart: this.state.total + currentTotal });
  }

  render() {
    return (
      <div className="cartPage-container">

        <hr className="hr-style-one"></hr>

        <h2>Cart</h2>

        {Object.keys(this.props.cartItems).map(key => (
          <CartItems 
            key={key} 
            index={key} 
            details={this.props.cartItems[key]}
          />
        ))}

        <div>
          <h2>Order Total: {formatPrice(this.props.totalCost)}</h2>
        </div>
      </div>
    );
  }
}

export default CartPage;