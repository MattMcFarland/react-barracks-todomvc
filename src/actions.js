import store from './store'
import { ActionTypes } from './constants'

const createSend = store.start({ subscriptions: true })
export const dispatch = createSend('todoApp', true)

const { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, TOGGLE_ALL, 
  TOGGLE_EDIT, CLEAR_COMPLETED, SET_VISIBILITY_FILTER, SAVE_TODO } = ActionTypes

let nextTodoId = 0

export const addTodo = (text) => 
  dispatch(ADD_TODO, {
    id: nextTodoId++,
    text
  })

export const removeTodo = (id) => 
  dispatch(REMOVE_TODO, {id})

export const setVisibilityFilter = (filter) => 
  dispatch(SET_VISIBILITY_FILTER, { filter })

export const toggleTodo = (id) => 
  dispatch(TOGGLE_TODO, {id})

export const toggleAll = (todos) => 
  dispatch(TOGGLE_ALL, {todos})

export const clearCompleted = () => 
  dispatch(CLEAR_COMPLETED)

export const toggleEdit = (id) => 
  dispatch(TOGGLE_EDIT, {id})

export const saveTodo = ({id, text}) => 
  dispatch(SAVE_TODO, {id, text})
