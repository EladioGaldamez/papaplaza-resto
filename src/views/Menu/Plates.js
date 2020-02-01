import React from 'react'
import Plate from '../../components/Plates/Plate'

class Plates extends React.Component {
  render() {
    const {
      food,
    } = this.props
    return (
      <div className="food">
        {
          food.map(plate => <Plate plate={plate} key={plate.id} />)
        }
      </div>
    )
  }
}

export default Plates