import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import configureStore from './actions/store';
import { BrowserRouter } from 'react-router-dom';
import './style.css';

const store = configureStore(window.PRELOADED_STATE);
delete window.PRELOADED_STATE;

ReactDOM.hydrate(
  <Root
    Router={BrowserRouter}
    store={store} />,
  document.getElementById("root")
);
