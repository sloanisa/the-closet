import React, { Component } from 'react';
import Items from './Items';

const dataUrl = '../store-items.json';

class Main extends Component {

  render() {
    return (
        <React.Fragment>
            <Items data-url={dataUrl} />
        </React.Fragment>
      
    );
  }
}

export default Main;