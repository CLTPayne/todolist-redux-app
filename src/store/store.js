const Redux = require('redux');

const todoApp = require('./todoReducer');

const { createStore } = Redux;
const store = createStore(todoApp);

console.log('Initial state:');
console.log(store.getState());
console.log('---------------');

console.log('Dispatching ADD_TODO');
store.dispatch({
  type: 'ADD_TODO',
  id: 0,
  text: 'Learn Redux'
});

console.log('Current state:');
console.log(store.getState());
console.log('---------------');

console.log('Dispatching ADD_TODO');
store.dispatch({
  type: 'ADD_TODO',
  id: 1,
  text: 'Go Shopping'
});

console.log('Current state:');
console.log(store.getState());
console.log('---------------');

console.log('Dispatching TOGGLE_TODO');
store.dispatch({
  type: 'TOGGLE_TODO',
  id: 0
});

console.log('Current state:');
console.log(store.getState());
console.log('---------------');
