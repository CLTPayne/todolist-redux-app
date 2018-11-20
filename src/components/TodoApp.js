import React, { Component } from 'react';
import { store } from '../store/store';
import VisibleTodoList from './VisibleTodoList';
import AddTodo from './AddTodo';
import Footer from './Footer';

let nextTodoId = 0;

const TodoApp = ({
  todos,
  visibilityFilter
}) => (
  <div>
    <AddTodo
      onAddClick={text =>
        store.dispatch({
          type: 'ADD_TODO',
          id: nextTodoId++,
          text
        })
      }
    />
    <VisibleTodoList />
    <Footer />
  </div>
)


export default TodoApp;
