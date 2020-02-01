import React from 'react'
import { Link } from 'react-router-dom'
import Score from '../Score'
import { sluglify } from '../../plugins'

class Plate extends React.Component {
  render() {
    const {
      plate,
    } = this.props

    const style = {
      backgroundImage: `url(${plate.image})`
    }

    return (
      <Link to={`/plate/${sluglify(plate.name)}`} className="plate full">
        <div className="bg-plate"  style={style}>
          <div className="content">
            <h3>{plate.name}</h3>
            <Score score={plate.score} />
          </div>
        </div>
      </Link>
    )
  }
}

export default Plate