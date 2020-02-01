import categories from './categories.json'
import food from './food.json'
import { sluglify } from '../plugins/index.js'

export const getFood = (category = null) => category ? food.filter(plate => plate.category === category) : food

export const getPlate = slug => food.find(plate => sluglify(plate.name) === slug) 

export const getFeaturedFood = () => food.filter(plate => plate.featured)

export const getCategories = () => categories

export const getCategory = id => categories.find(category => category.id === id)