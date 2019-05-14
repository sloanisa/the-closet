
import React, { Component } from 'react';

class Inventory extends Component {

    state = {
        inventory: []
       }

       async fetchInventory() {
        const result = await fetch(this.props['data-url']);
        const inventory = await result.json();
        this.setState({ inventory });
      }

     componentDidMount() {
        this.fetchInventory();
    }
    
  render() {
    return (
    <React.Fragment>
        <div className="inventory-container">
            {this.state.inventory.map(inventoryItem => (
            <form key={inventoryItem.id} className="indiv-inventory-form">
                <input type="text" name="inventoryItemID" value={inventoryItem.id}></input>
                <img src={inventoryItem.image}></img>
                <input type="text" name="inventoryItemImage" value={inventoryItem.image}></input>
                <input type="text" name="inventoryItemName" value={inventoryItem.name}></input>
                <input type="text" name="inventoryItemPrice" value={inventoryItem.price}></input>
            </form>
            ))}
        </div>
    </React.Fragment>
    );
  }
}

export default Inventory;