import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

class PlateImagesGrid extends React.Component {
  render() {
    const {
      category,
      food,
    } = this.props

    return (
      <div className="food-grid">
        <div className="grid">
          {
            food.map(plate => (
              <Link key={plate.id} className="plate-image" to={`/plates/${plate.id}`}>
                <img src={plate.image} alt={plate.name} />
              </Link>
            ))
          }
        </div>
        <Link className="cta" to={`/menu?category=${category.id}`}>
          <span>See all menu</span>
          <FiArrowRight size={32} />
        </Link>
      </div>
    )
  }
}

export default PlateImagesGrid
