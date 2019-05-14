import React, { Component } from 'react';
import { formatPrice } from '../utilities';

class Items extends Component {

   state = {
        items: []
       }

       async fetchItems() {
        const result = await fetch(this.props['data-url']);
        const items = await result.json();
        this.setState({ items });
      }

     componentDidMount() {
        this.fetchItems();
    }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="items-container">
            {this.state.items.map(item => (
              <div key={item.id} className="items">
                <img src={item.image}></img>
                <p>{item.name}</p>
                <p>{formatPrice(item.price)}</p>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Items;