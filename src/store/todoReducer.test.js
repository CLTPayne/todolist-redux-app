const todos = require('./todoReducer');

describe('To do reducer', () => {
  it('correctly updates the state', () => {
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
});
