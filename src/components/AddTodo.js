import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actionCreators';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div className="addtodo__container">
      <input className="addtodo__input" ref={node => {
        input = node;
      }} />
      <button className="addtodo__button" onClick={() => {
        dispatch(addTodo(input.value)),
        input.value = '';
      }}>
      Add
      </button>
    </div>
  )
};

AddTodo = connect()(AddTodo)

export default AddTodo;
