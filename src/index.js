import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode> {/* Enables additional checks and warnings in development */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(); // Measure and report performance metrics in your app
