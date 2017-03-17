import React, { Component } from 'react';
import { subscribe } from '../store';
import { addTodo } from '../actions';

const onSubmit = (e, input) => {
  e.preventDefault()
  if (!input.value.trim()) {
    return
  }
  addTodo(input.value)
  input.value = ''
}
class AddTodo extends Component {
  constructor (props) {
    super(props)
    subscribe(this)
  }
  render() {
    let input
    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={e => onSubmit(e, input)}>
          <input ref={node => { input = node }} className="new-todo" placeholder="What needs to be done?" autoFocus />
        </form>
      </header>
    );
  }
}

export default AddTodo
