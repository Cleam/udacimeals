const API_ID = process.env.REACT_APP_API_ID
const APP_KEY = process.env.REACT_APP_APP_KEY

export function fetchRecipes(food = '') {
  food = food.trim()
  // https://developer.edamam.com/admin
  // https://api.edamam.com/search?q=chicken&app_id=e3ff73b8&app_key=75e69b3fb81f2f3c9a81097d7ec4004d
  return fetch(`https://api.edamam.com/search?q=${food}&app_id=${API_ID}&app_key=${APP_KEY}`)
    .then((res) => res.json())
    .then(({ hits }) => hits.map(({ recipe }) => recipe))
}