const todoApp = require('./todoReducer');

describe('To do reducer', () => {
  it('correctly adds a todo to the state', () => {
    const stateBefore = {
      todos: [],
      visibilityFilter: "SHOW_ALL"
    };
    const action = {
      type: 'ADD_TODO',
      id: 0,
      text: 'Learn Redux'
    };
    const stateAfter = {
      todos: [
        {
          id: 0,
          text: 'Learn Redux',
          completed: false
        }
      ],
      visibilityFilter: "SHOW_ALL"
    };
  expect(todoApp(stateBefore, action)).toEqual(stateAfter);
  });

  it('toggles the todo state', () => {
    const stateBefore = {
      todos: [
        {
          id: 0,
          text: 'Learn Redux',
          completed: false
        },
        {
          id: 1,
          text: 'Buy some lurex trousers',
          completed: false
        }
      ],
      visibilityFilter: "SHOW_ALL"
    };

    const action = {
      type: 'TOGGLE_TODO',
      id: 1,
    };

    const stateAfter = {
      todos: [
        {
          id: 0,
          text: 'Learn Redux',
          completed: false
        },
        {
          id: 1,
          text: 'Buy some lurex trousers',
          completed: true
        }
      ],
      visibilityFilter: "SHOW_ALL"
    };
  expect(todoApp(stateBefore, action)).toEqual(stateAfter);
  });
});
