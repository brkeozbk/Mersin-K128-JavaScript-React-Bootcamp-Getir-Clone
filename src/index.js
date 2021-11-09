import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import {Provider} from "react-redux"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'alertifyjs/build/css/alertify.min.css'
import configureStore from "./redux/reducers/configureStore"
import * as serviceWorker from './serviceWorker';
const store = configureStore();
ReactDOM.render(
  <React.StrictMode>
 <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();