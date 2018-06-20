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
          <MealItem key={meal.idMeal} meal={meal} onRemove={this.removeMeal} index={index} />
        ))}
        {savedMeals.length === 0 && (
          <div>You don't have any saved meals yet...</div>
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
