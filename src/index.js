import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Lines} from 'react-preloaders'



ReactDOM.render(

  <React.StrictMode>
    <Lines color={'rgb(9, 226, 9)'}background="#000" time={5000} animation="slide-right"/>
    <App />
  </React.StrictMode>,
  
  document.getElementById('root')
  
);

