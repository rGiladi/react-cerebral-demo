import { Module } from 'cerebral'
import * as sequences from './sequences'
import * as providers from './providers'

const module = Module({
  state: {
    currentMeal: null,
    savedMeals: providers.storage.definition.get('savedMeals') || []
  },
  signals: {
    getRandomMeal: sequences.getRandomMeal,
    saveMeal: sequences.saveMeal,
    removeMeal: sequences.removeMeal
  },
  providers
})

export default module
