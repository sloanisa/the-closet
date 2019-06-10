import React, { Component } from 'react';
import EditItemForm from './EditItemForm';

class Inventory extends Component {
  render() {
    return (
    <React.Fragment>
      <div className="inventory" id="admin">

        <hr className="hr-style-one"></hr>

        <h2>The Closet Item Inventory</h2>
        <br></br>

        <div className="inventory-container">
        {Object.keys(this.props.storeItems).map(key => (
          <EditItemForm
            key={key}
            index={key}
            storeItems={this.props.storeItems[key]}
            updateItem={this.props.updateItem}
            deleteItem={this.props.deleteItem}
          />
        ))}
        </div>
      </div>
    </React.Fragment>
    );
  }
}

export default Inventory;