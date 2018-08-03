import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});
