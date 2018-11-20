import React, { Component } from 'react';
import { store } from '../store/store';
import TodoList from './TodoList';

class VisibleTodoList extends Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  }

  componentWillUnMount() {
    this.unsubscribe();
  }

  getVisibleTodos(todos, filter) {
    switch (filter) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_COMPLETED':
        return todos.filter(
          t => t.completed
        );
      case 'SHOW_ACTIVE':
        return todos.filter(
          t => !t.completed
        );
    }
  }

  render() {
    const props = this.props;
    const state = store.getState();
    const getVisibleTodos = this.getVisibleTodos;

    return(
      <TodoList
        todos={
          getVisibleTodos(
            state.todos,
            state.visibilityFilter
          )
        }
        onTodoClick={id =>
          store.dispatch({
            type: 'TOGGLE_TODO',
            id
          })
        }
      />
    );
  }
}

export default VisibleTodoList;
