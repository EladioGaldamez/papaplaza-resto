import React from 'react'
import { Link } from 'react-router-dom'
import Score from '../Score'
import { FiArrowRight } from 'react-icons/fi'

class PlateSimple extends React.Component {
  render() {
    const {
      plate,
    } = this.props

    const style = {
      backgroundImage: `url(${plate.image})`
    }

    return (
      <Link to="/" className="plate simple">
        <div className="bg-plate"  style={style}>
          <div className="content">
            <Score score={plate.score} />
            <div className="cta">
              <span>See all menu</span>
              <FiArrowRight size={32} />
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default PlateSimple