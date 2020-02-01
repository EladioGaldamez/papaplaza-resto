import React from 'react'
import Hero from '../../components/Hero'
import CategoriesMenu from '../../components/CategoriesMenu'
import { getCategory, getFood } from '../../data'
import Plates from './Plates'

class Menu extends React.Component {
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

    return (
      <div className="menu-page">
        <Hero
          isSimple={true}
          background="https://images.unsplash.com/photo-1558584724-0e4d32ca55a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1402&q=80"
          title="Menu"
        />

        <CategoriesMenu activeId={category.id} onClickItem={this.onChangeCategory} />

        <Plates food={food} />
      </div>
    )
  }
}

export default Menu
