import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router, Switch } from 'react-router-dom';
import './assets/main.css'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

