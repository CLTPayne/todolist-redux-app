// Initially used a global variable for the store but not suitable for real world apps
// export const store = createStore(todoApp);

// Exmaple of hardcoded actions being dispatched and logged
// This is dispatching and statechange handled by the view layer using react

// console.log('Initial state:');
// console.log(store.getState());
// console.log('---------------');
//
// console.log('Dispatching ADD_TODO');
// store.dispatch({
//   type: 'ADD_TODO',
//   id: 0,
//   text: 'Learn Redux'
// });
//
// console.log('Current state:');
// console.log(store.getState());
// console.log('---------------');
//
// console.log('Dispatching ADD_TODO');
// store.dispatch({
//   type: 'ADD_TODO',
//   id: 1,
//   text: 'Go Shopping'
// });
//
// console.log('Current state:');
// console.log(store.getState());
// console.log('---------------');
//
// console.log('Dispatching TOGGLE_TODO');
// store.dispatch({
//   type: 'TOGGLE_TODO',
//   id: 0
// });
//
// console.log('Current state:');
// console.log(store.getState());
// console.log('---------------');
//
// console.log('Dispatching SET_VISIBILITY_FILTER');
// store.dispatch({
//   type: 'SET_VISIBILITY_FILTER',
//   filter: 'SHOW_COMPLETED'
// });
//
// console.log('Current state:');
// console.log(store.getState());
// console.log('---------------');
