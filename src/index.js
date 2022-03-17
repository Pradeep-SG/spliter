import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ReactComponent as Logo} from "./components/svg_files/logo.svg";


ReactDOM.render(
  <div>
    <div className="logo">
      <Logo />
    </div>
    <App />
  </div>,
  document.getElementById('root')
);

