import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Route';
import reportWebVitals from './reportWebVitals';
import Header from './Component/Header Section/Header';
import {BrowserRouter as Router } from "react-router-dom";



ReactDOM.render(
  <Router>
    <App />
  </Router>
  ,document.getElementById('root')
);

reportWebVitals();
