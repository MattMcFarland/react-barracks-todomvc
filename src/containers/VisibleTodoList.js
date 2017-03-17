import React, { Component } from 'react';
import { subscribe } from '../store';
import { toggleAll } from '../actions';
import TodoList from '../components/TodoList'
import { VisibleTypes } from '../constants'

const getVisibleTodos = (todos, filter) => {
  const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VisibleTypes
  switch (filter) {
    case SHOW_ALL:
      return todos
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      return SHOW_ALL
  }
}

class VisibleTodoList extends Component {
  constructor (props) {
    super(props)
    subscribe(this)
  }
  render () {
    const { todos, visibilityFilter } = this.state
    const visibleTodos = getVisibleTodos(todos, visibilityFilter)
    const isAllChecked = visibleTodos.length === visibleTodos.filter(t => t.completed).length 
    return (
      <section className="main">
        <input className="toggle-all" type="checkbox" 
          onChange={() => toggleAll(visibleTodos)}
          checked={isAllChecked}/>
        <TodoList todos={visibleTodos}/>
      </section>
      );
  }
}


export default VisibleTodoList