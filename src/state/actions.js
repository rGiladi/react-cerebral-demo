
export function getRandomMeal ({ http, path }) {
  return http.get('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => path.success({ meal: res.data.meals[0] }))
    .catch(error => path.error({ error }))
}

export function saveMeal ({ state, path }) {
  const savedMeals = state.get`savedMeals`
  const currentMeal = state.get`currentMeal`

  // This ensures that we don't add the same meal twice
  if (savedMeals.find(meal => meal.idMeal === currentMeal.idMeal)) {
    return path.exists()
  } else {
    state.push('savedMeals', currentMeal)
    return path.store({ key: 'savedMeals', data: state.get`savedMeals` })
  }
}

export function removeMeal ({ state, props }) {
  state.splice('savedMeals', props.index, 1)
  return { key: 'savedMeals', data: state.get`savedMeals` }
}

export function saveToStorage ({ props, storage }) {
  storage.set(props.key, props.data)
}
