const initialState = {
  todos: [],
  visibilityFilter: 'SHOW_ALL'
}

const reducers = {
  ADD_TODO: ({todos}, action) => ({
    todos: [...todos, { id: action.id, text: action.text, completed: false, isEditing: false}]
  }),
  CLEAR_COMPLETED: (state) => ({
    todos: state.todos.filter(t => t.completed === false)
  }),
  REMOVE_TODO: (state, action) => ({
    todos: state.todos.filter(t => {
      if (t.id !== action.id) return true
      else return false
    })
  }),
  SAVE_TODO: (state, action) => ({ 
    todos: state.todos.map(t => {
      if (t.id !== action.id) { return t }
      return Object.assign({}, t, action, { isEditing: false })
    })    
  }),
  SET_VISIBILITY_FILTER: (state, action) => ({ 
    visibilityFilter: action.filter 
  }),
  TOGGLE_TODO: (state, action) => ({ 
    todos: state.todos.map(t => {      
      if (t.id !== action.id) { return t }
      return Object.assign({}, t, {
        completed: !t.completed
      })
    })
  }),
  TOGGLE_ALL: (state, action) => ({
    todos: state.todos.map(t => { 
      return Object.assign({}, t, {
        completed: !t.completed
      })
    })
  }),
  TOGGLE_EDIT: (state, action) => ({
    todos: state.todos.map(t => {      
      if (t.id !== action.id) { return t }
      return Object.assign({}, t, {
        isEditing: !t.isEditing
      })
    })      
  })
}

const state = initialState
const effects = {}
const subscriptions = {}

export default ({
  state,
  effects,
  reducers,
  subscriptions
})
