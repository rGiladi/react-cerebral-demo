import React, { Component } from 'react';

class MealItem extends Component {
  render () {
    const { meal } = this.props

    return (
      <a className='meal-item' href={meal.strSource} target='__blank'>
        <img src={meal.strMealThumb} alt='meal-thumbnail' />
        <div className='info'>
          <div className='title'>{meal.strMeal}</div>
          <span className='additional-data'>{meal.strArea}, {meal.strCategory}</span>
        </div>
        <div className='delete' onClick={this.removeMeal}>X</div>
      </a>
    )
  }

  removeMeal = e => {
    e.preventDefault() // prevent the link from opening
    this.props.onRemove(this.props.index)
  }
}

export default MealItem
