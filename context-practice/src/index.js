import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppLang from './lang-context/AppLang';

ReactDOM.render(
  <React.StrictMode>
    <AppLang />
  </React.StrictMode>,
  document.getElementById('root')
);
