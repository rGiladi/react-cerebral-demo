import * as actions from './actions'

export const getRandomMeal = [
  actions.getRandomMeal,
  {
    success: ({ props, state }) => state.set('currentMeal', props.meal),
    error: ({ props, state }) => console.log(props.error) // obviously this needs better handling
  }
]

export const saveMeal = [
  actions.saveMeal,
  {
    store: actions.saveToStorage,
    exists: () => alert('You have already saved that meal')
  }
]

export const removeMeal = [
  actions.removeMeal,
  actions.saveToStorage
]
