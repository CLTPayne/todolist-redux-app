import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';
import { store } from './store/store';

ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
);
