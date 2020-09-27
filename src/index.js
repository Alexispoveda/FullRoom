//React
import React from 'react';
import ReactDOM from 'react-dom';

//Estilos
import './index.css';

//App
import App from './App';

//React Router
import {BrowserRouter} from 'react-router-dom'

//Auth Provider
import {AuthProvider} from './Tools/Auth'

//PWA (Progressive Web App)
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById('root')
);

serviceWorker.register();
