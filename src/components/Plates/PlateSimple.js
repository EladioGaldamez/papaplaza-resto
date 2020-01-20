import React from 'react'
import { Link } from 'react-router-dom'

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
            <span>See all menu</span>
          </div>
        </div>
      </Link>
    )
  }
}

export default PlateSimple