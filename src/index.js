import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import $ from 'jquery';
// import Popper from 'popper.js';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

 
ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
 
// If you want to start measuring performance
// in your app, pass a function to log results
// (for example: reportWebVitals(console.log))
// or send to an analytics endpoint.


