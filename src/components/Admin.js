import React, { Component } from 'react';
import Inventory from './Inventory';

const dataUrl = './store-items.json';

class Admin extends Component {
  render() {
    return (
      <div className="admin-container">
        <Inventory data-url={dataUrl} />
      </div>
    );
  }
}

export default Admin;
