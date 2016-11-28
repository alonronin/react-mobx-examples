import React from 'react';
import {render} from 'react-dom';
import App from './App';
import store from './app-store';

const el = document.createElement('div');
document.body.appendChild(el);

render(
  <App store={store} />,
  el
);
