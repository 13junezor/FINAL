import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './redux/reducers/rootReducer';
import initState from './redux/state';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import { API_TOKEN } from './constants/constans';


const store = createStore(rootReducer, initState(), composeWithDevTools(applyMiddleware(thunk)))
store.subscribe(() => {
  localStorage.setItem(API_TOKEN, store.getState().person.token)
  })
  

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);