import React from 'react';
import WOW from "wow.js";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

new WOW().init();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

