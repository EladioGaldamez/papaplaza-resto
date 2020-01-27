import React from 'react'
import { getCategory, getFood } from '../../data'
import CategoriesMenu from '../CategoriesMenu'
import PlateImagesGrid from './PlateImagesGrid'

class CategorizedMenu extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      category: {},
      food: [],
    }

    this.onChangeCategory = this.onChangeCategory.bind(this)
  }

  componentDidMount() {
    this.onChangeCategory('breakfast')
  }


  onChangeCategory(categoryId) {
    const category = getCategory(categoryId)
    let food = []

    if (category) {
      food = getFood(category.id)
    }

    this.setState({ category, food })
  }

  render() {
    const {
      category,
      food
    } = this.state

    const {
      title = 'Our Categorized Menu',
    } = this.props

    return (
      <div className="categorized-menu">
        <h2>{title}</h2>
        <CategoriesMenu activeId={category.id} onClickItem={this.onChangeCategory} />
        <PlateImagesGrid category={category} food={food} />
      </div>
    )
  }
}

export default CategorizedMenu