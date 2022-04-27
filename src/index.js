import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { API_TOKEN } from './constants/constans';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './redux/reducers/store';
store.subscribe(() => {
  localStorage.setItem(API_TOKEN, store.getState().person.token)
  })
    ReactDOM.render(
    <React.StrictMode>
            <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
  <App />
  </PersistGate>
      </Provider>
          </React.StrictMode>,
    document.getElementById('root')
  );