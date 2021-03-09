import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';

import reportWebVitals from './reportWebVitals';
import { Body } from './Body';
import { store } from './redux/store';

ReactDOM.render(
  // <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Body />
        <App />
      </Provider>
    </Router>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
