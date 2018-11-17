import React from 'react';

const Todo = ({
  onClick,
  completed,
  text
}) => (
  <li
    onClick={onclick}
    style={{
      textDecoration:
        completed ?
          'line-through' :
          'none'
    }}>
    {text}
  </li>
);

export default Todo;
