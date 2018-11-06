const Redux = require('redux');

// Update a single todo:

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
}

// Manage the array of todos:
// Reducers are normal js functions so you can have many reducers calling
// eachother and each contributing to a part of the application state tree.
// Reducer composition is one reducer calling another reducer.

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

const visibilityFilter = (
  state = 'SHOW_ALL',
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

// Manual reducer compoisition to create a top level reducer:
// (But this pattern is so common in Redux applications see combineReducers)

// const todoApp = (state = {}, action) => {
//   return {
//     todos: todos(
//       state.todos,
//       action
//     ),
//     visibilityFilter: visibilityFilter(
//       state.visibilityFilter,
//       action
//     )
//   }
// }


// Arguement for combineReducers is an object that allows you to dictate the
// mapping between the state fields and the reducers managing those bits of state

const { combineReducers } = Redux
const todoApp = combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter
})

module.exports = todoApp
