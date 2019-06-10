import React, { Component } from 'react';

class EditItemForm extends Component {

    handleChange = event => {
           console.log(event.currentTarget.value);
           console.log(event.currentTarget.name);

        const updatedItem = {
            ...this.props.storeItems,

            [event.currentTarget.name]: event.currentTarget.value
        };

        console.log(updatedItem);
        this.props.updateItem(this.props.index, updatedItem);
    };

  render() {
    const { name, status, price, id, desc } = this.props.storeItems;
    return (
      <div className="item-edit">
        <div className="controlgroup">
          <p>Item ID: #{id}</p>
        </div>
        <div className="controlgroup">
            <label htmlFor="name">Name: </label>
            <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
            />
        </div>
        <div className="controlgroup">
          <label htmlFor="price">Price: </label>
          <input
            type="text"
            name="price"
            onChange={this.handleChange}
            value={price}
          />
        </div>
        <div className="controlgroup">
          <label htmlFor="desc">Description: </label><br></br>
          <textarea
            type="text"
            name="desc"
            onChange={this.handleChange}
            value={desc}
          />
        </div>
        <div className="controlgroup">
          <label htmlFor="status">Status: </label>
          <select
            name="status"
            onChange={this.handleChange}
            value={status}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>
    );
  }
}

export default EditItemForm;