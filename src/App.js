import React, { Component } from 'react';
import { connect } from '@cerebral/react'
import { state, signal } from 'cerebral/tags'
import MealBox from './components/MealBox'
import SavedMealsList from './components/SavedMealsList'
import './App.css'

class App extends Component {
  componentDidMount () {
    this.props.getRandomMeal()
  }

  render () {
    const { currentMeal } = this.props

    return (
      <div>
        {currentMeal ? <MealBox meal={currentMeal} /> : <div className='loader' />}
        <div className='buttons'>
          <button onClick={this.getRandomMeal} className='new'>New Meal</button>
          <button onClick={this.saveMeal} className='save'>Save Meal</button>
        </div>
        <SavedMealsList />
      </div>
    )
  }

  getRandomMeal = () => {
    this.props.getRandomMeal()
  }

  saveMeal = () => {
    this.props.saveMeal()
  }
}

export default connect({
  currentMeal: state`currentMeal`,
  getRandomMeal: signal`getRandomMeal`,
  saveMeal: signal`saveMeal`
}, App)
