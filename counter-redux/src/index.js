import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import './index.css';

function counters(state=0, action) {
  if (action.type === 'ADD_ONE') {
    return state +1 
  }
  else if(action.type==="ADD_FIVE"){
  	return state +5
  }
  else if(action.type==="ADD_TEN"){
  	return state +10
  }
  return state;
}

const store = createStore(counters);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
