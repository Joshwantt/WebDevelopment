import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Menu from './Menu';
import Footer from './Foot';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <Menu />, document.getElementById('header')

);

ReactDOM.render(
  <Footer />, document.getElementById('footer')

);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
