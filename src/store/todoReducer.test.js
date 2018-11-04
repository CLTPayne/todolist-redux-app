const todos = require('./todoReducer');

describe('To do reducer', () => {
  it('correctly adds a todo to the state', () => {
    const stateBefore = [];
    const action = {
      type: 'ADD_TODO',
      id: 0,
      text: 'Learn Redux'
    };
    const stateAfter = [
      {
        id: 0,
        text: 'Learn Redux',
        completed: false
      }
    ]
  expect(todos(stateBefore, action)).toEqual(stateAfter);
  });

  it('toggles the todo state', () => {
    const stateBefore = [
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
    ];

    const action = {
      type: 'TOGGLE_TODO',
      id: 1,
    };

    const stateAfter = [
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
    ]
  expect(todos(stateBefore, action)).toEqual(stateAfter);
  });
});
