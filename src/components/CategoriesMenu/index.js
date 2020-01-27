import React from 'react'
import { getCategories } from '../../data'

class CategoriesMenu extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      categories: getCategories(),
    }

    this.onClickItem = this.onClickItem.bind(this)
  }
  
  onClickItem(event) {
    event.preventDefault()
    event.stopPropagation()
    event.nativeEvent.stopImmediatePropagation()
    const { dataset } = event.target
    this.props.onClickItem(dataset.id)
  }

  render() {
    const { activeId } = this.props 
    return (
      <div className="categories-menu">
        {
          this.state.categories.map(category => (
            <a key={category.id} href="/" rel="noopener" className={`category-menu ${category.id === activeId ? 'active' : ''}`} onClick={this.onClickItem} data-id={category.id}>{category.name}</a>
          ))
        }
      </div>
    )
  }
}

export default CategoriesMenu