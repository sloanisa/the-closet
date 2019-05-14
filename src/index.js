import React from 'react';
import { render } from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Nav from './components/Nav';
import Main from './components/Main';


// const dataUrl = './store-items.json';

  render(
      <React.Fragment>
        <Nav />
        <Main />
      </React.Fragment>,
    document.getElementById('app')
  );

serviceWorker.unregister();
