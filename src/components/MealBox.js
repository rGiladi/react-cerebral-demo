import React from 'react'

const MealBox = ({ meal }) => (
  <div className='meal-box'>
    <div className='title'>{meal.strMeal}</div>
    <span className='additional-data'>{meal.strArea}, {meal.strCategory}</span>
    <img src={meal.strMealThumb} alt='meal-thumbnail' />
  </div>
)

export default MealBox
