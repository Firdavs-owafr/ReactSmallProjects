import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
let nav = {
  nav : 'navbar',
  section : 'section',
}
const goWork = 'Go work'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App title={'index'}
      go={goWork}
      navv={nav} 
     />
  </React.StrictMode>
);

