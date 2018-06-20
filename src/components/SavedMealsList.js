import React, { Component } from 'react';
import { connect } from '@cerebral/react'
import { state, signal } from 'cerebral/tags'
import MealItem from './MealItem'

class SavedMealsList extends Component {

  render() {
    const { savedMeals } = this.props

    return (
      <div className='saved-meals-list'>
        {savedMeals.map((meal, index) => (
          <MealItem key={meal.idMeal} meal={meal} index={index} onRemove={this.removeMeal} />
        ))}
        {savedMeals.length === 0 && (
          <div>No meals have been saved yet...</div>
        )}
      </div>
    );
  }

  removeMeal = (index) => {
    this.props.removeMeal({ index })
  }
}

export default connect({
  savedMeals: state`savedMeals`,
  removeMeal: signal`removeMeal`
}, SavedMealsList)
