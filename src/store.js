import barracks from 'barracks'
import model from './model'

const store = barracks()

store.model(model);

export function subscribe (component) {
  store.use({
    onStateChange: (state, data, prev, caller, createSend) => {
      component.setState(state)
    }
  })
  component.state = store.state() || {}
}

export const state = store.state
export default store

