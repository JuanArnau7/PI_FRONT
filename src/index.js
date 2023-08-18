import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3001';
// axios.defaults.baseURL = 'https://piback-production-b28c.up.railway.app';


// axios.defaults.baseURL = 'https://piback-production-aff5.up.railway.app';
// axios.defaults.baseURL = 'https://piback-production-5418.up.railway.app/';
// axios.defaults.baseURL = 'https://piback-production-2baa.up.railway.app';
axios.defaults.baseURL = 'https://piback-production-a621.up.railway.app';
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
