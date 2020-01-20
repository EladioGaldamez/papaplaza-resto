import React from 'react'
import { getFeaturedFood } from '../../data'
import PlateSimple from '../Plates/PlateSimple'

class FeaturedFood extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      food: []
    }
  }

  componentDidMount() {
    const food = getFeaturedFood()
    this.setState({ food })
  }

  render() {
    const {
      food,
    } = this.state

    const {
      title,
      content,
    } = this.props

    return (
      <div className="featured-food">
        <h2>{title}</h2>
        <p>{content}</p>

        <div className="food">
        {
          food.map((plate, index) => (
            <PlateSimple key={index} plate={plate} />
          ))
        }
        </div>
      </div>
    )
  }
}

export default FeaturedFood