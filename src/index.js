import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';


const jsx = (
    <Provider store={store}>
      <App />
    </Provider>
  );

ReactDOM.render(jsx, document.getElementById('root'));

