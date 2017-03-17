import React, { Component } from 'react'
import FilterLink from '../containers/FilterLink'
import { subscribe } from '../store'
import { clearCompleted } from '../actions'

const todosLeft = (todos) => {
  const count = todos.filter(t => !t.completed).length
  return count === 1 ? `1 item left` : `${count} items left`
}

class Footer extends Component {
  constructor (props) {
    super(props)
    subscribe(this)
  }  
  render () {
    const todos = this.state.todos
    return <footer className="footer">
      <span className="todo-count">{todosLeft(todos)}</span>  
      <ul className="filters">
        <li>
          <FilterLink filter="SHOW_ALL">All</FilterLink>
        </li>
        <li>
          <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
        </li>
        <li>
          <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
        </li>
      </ul>
      { todos.filter(t => t.completed).length 
        ? <button onClick={clearCompleted} className="clear-completed">Clear completed</button> 
        : ''}
    </footer>
  }
}
export default Footer