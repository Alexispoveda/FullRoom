//React
import React from 'react';
import ReactDOM from 'react-dom';

//Estilos
import './index.css';

//App
import App from './App';

//PWA
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
