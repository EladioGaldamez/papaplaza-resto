import React from 'react'
import { FiStar } from 'react-icons/fi'

class Score extends React.Component {
  render() {
    const {
      score,
      max = 5,
    } = this.props

    const stars = []

    for (let index = 0; index < max; index++) {
      stars.push(
        <FiStar { ...(index < score ? {fill: "#ffffff"} : {}) } size={24} key={index} />
      )
    }

    return (
      <div className="score">
        {stars.map(star => star)}
      </div>
    )
  }
}

export default Score