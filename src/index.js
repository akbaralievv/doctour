import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import index from './index.css';
import i18n from './i18n.js';
import { store } from './redux/store';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
