import React from 'react'
import { getPlate } from '../../data'
import Score from '../../components/Score'

class PlateView extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      plate: {},
    }

    document.body.classList.add('is-plate')
  }

  componentDidMount() {
    const { match: { params } } = this.props

    if (params.slug) {
      const plate = getPlate(params.slug)
      this.setState({ plate })
    }
  }

  render() {
    const {
      plate,
    } = this.state

    return (
      <div className="plate-page">
        <div className="image">
          <img
            src={plate.image || ''}
            alt={plate.name || 'Not found'} />
        </div>

        <div className="info">
          <h1>{plate.name || 'Plate not found'}</h1>

          {
            plate.category &&
            <h3>{plate.category}</h3>
          }

          {
            plate.score &&
            <Score score={plate.score} fill="#696969" color="#696969" />
          }

          {
            plate.description &&
            <p>{plate.description}</p>
          }
        </div>
      </div>
    )
  }
}

export default PlateView