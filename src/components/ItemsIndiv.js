import React, { Component } from 'react';
import { formatPrice } from '../utilities';

class ItemsIndiv extends Component {

    constructor(props) {
        super(props);
        this.state = {
          count: 0 
        };

        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    addToCart = (price, name) => {
        const item = {
            price: price,
            name: name,
            count: this.state.count
          }
          this.props.addItem(this.props.index, item)
    };

    handleAdd = (event) => {
        //console.log("WHAT WAS CLICKED ON: " + event.currentTarget.image);
        const price = event.currentTarget.value
        const name = event.currentTarget.name

        this.setState({count: this.state.count + 1 }, () => this.addToCart(price, name));
        let cost = price * 1
        this.props.setTotal(cost)
        console.log("THIS IS THE PRICE: " + cost);
      }
    
      handleRemove = (event) => {
        if (this.state.count > 0) {
          const price = event.currentTarget.value
          const name = event.currentTarget.name
          this.setState({count: this.state.count - 1 }, () => this.addToCart(price, name));
          let cost = price * -1
          this.props.setTotal(cost)
        }
      }

  render() {
    const { image, name, price, status, desc} = this.props.details;
    // console.log("HERE THE DETAILS: " + this.props.details)

    let removeFromCart;
    if (this.state.count > 0) {
      removeFromCart = <button type="button" value={price} name={name} onClick={this.handleRemove}> REMOVE FROM CART</button>;
    } else {
      removeFromCart = <div></div>;
    }

    return (
      <div key="this.props.key" className={status}>
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <h4>{status}</h4>
        <h5>{desc}</h5>
        <p>{formatPrice(price)}</p>
        <button type="button" value={price} name={name} onClick={this.handleAdd}>ADD TO CART</button> {removeFromCart}
      </div>
    );
  }
}

export default ItemsIndiv;
