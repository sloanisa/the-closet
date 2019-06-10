import React, { Component } from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import ItemsIndiv from './ItemsIndiv'
import Inventory from './Inventory';
import CartPage from './CartPage';
import storeItems from '../js/store-items';
import base from '../js/base';

class Items extends Component {

    state = {
      storeItems: [],
      cartItems: [],
      totalCost: 0
    }

    componentDidMount() {
      this.ref = base.syncState('storeItems', {
        context: this,
        state: 'storeItems'
      });
      this.loadStoreItems();
    }

    loadStoreItems = () => {
      this.setState({ storeItems });
    };

    updateItem = (key, updatedItem) => {

      const storeItems = { ...this.state.storeItems };
    
      storeItems[key] = updatedItem;

     this.setState({ storeItems });
    }
    
    deleteItem = (key) => {
      const cartItems = { ...this.state.cartItems };
      cartItems[key] = null;
      console.log("ITEM ADDED TO CART: " + JSON.stringify(cartItems));
      this.setState({ cartItems });
    }

    addItem = (key, addItem) => {
      const cartItems = { ...this.state.cartItems };
      cartItems[key] = addItem;
      console.log("ITEM ADDED TO CART: " + JSON.stringify(cartItems));
      this.setState({ cartItems });
    };

    setTotal = (cost) => {
      var totalCost = this.state.totalCost;
      totalCost = this.state.totalCost + cost;
      this.setState({ totalCost });
    }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="items-container">
            {Object.keys(this.state.storeItems).map(key => (
              <ItemsIndiv key={key} index={key} setTotal={this.setTotal} addItem={this.addItem} details={this.state.storeItems[key]}/>
            ))}
          </div>
          <section>
            <Inventory name="inventory"
              updateItem={this.updateItem}
              deleteItem={this.deleteItem}
              storeItems={this.state.storeItems}
            />
          </section>
          <section name="cart">
            <CartPage
              cartItems={this.state.cartItems}
              setTotal={this.setTotal} 
              totalCost={this.state.totalCost}
            />
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default Items;