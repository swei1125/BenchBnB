import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {login} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  // Just for testing
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  window.login = login;
  // Done testing

  ReactDOM.render(<Root store={store} />, root);
});
