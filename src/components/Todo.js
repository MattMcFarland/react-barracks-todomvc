import React, { PropTypes } from 'react'
import { toggleTodo, removeTodo, toggleEdit, saveTodo } from '../actions'

const Todo = ({ completed, text, id, isEditing }) => (
  <li className={completed ? "completed" : isEditing ? "editing" : ""}>
  <div className="view">
  <input onChange={() => toggleTodo(id)}
              className="toggle" type="checkbox" checked={completed}/>
  <label onDoubleClick={() => toggleEdit(id)}>{text}</label>              
  <button className="destroy" onClick={() => removeTodo(id)}></button>
  </div>
  { isEditing 
    && 
    <input 
      onBlur={() => toggleEdit(id)} 
      onSubmit={() => toggleEdit(id)} 
      onKeyDown={(e) => {
        if (e.which === 13) {
          saveTodo({id, text: e.target.value.trim()})
        }
      }}
      className="edit" 
      defaultValue={text} 
      autoFocus 
      type="text"/> 
  }
</li>
)

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo