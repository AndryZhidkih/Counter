import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"
import {createStore} from "redux";
import CounterReducer from "./reducers/count-reducer"
import App from './App';
import './index.css';

const store=createStore(CounterReducer)

ReactDOM.render(
	<Provider store={store}>
    <App />
   </Provider>,
  document.getElementById('root')
);
