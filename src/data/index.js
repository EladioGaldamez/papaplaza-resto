import categories from './categories.json'
import food from './food.json'

export const getFood = (category = null) => category ? food.filter(plate => plate.category === category) : food

export const getFeaturedFood = () => food.filter(plate => plate.featured)

export const getCategories = () => categories
