import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';
import { store } from './store/store';

const render = () => {
  ReactDOM.render(
    <TodoApp {...store.getState()} />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
