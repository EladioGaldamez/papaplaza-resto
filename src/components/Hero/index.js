import React from 'react'
import { Link } from 'react-router-dom'

class Hero extends React.Component {
  render() {
    const {
      isSimple,
      background,
      title,
      content,
      cta,
    } = this.props

    const customClass = `hero ${isSimple ? 'simple' : 'normal'}`
    const style = {
      backgroundImage: `url(${background})`
    }

    return (
      <div
        className={customClass}
        style={style}>
        <h1>{title}</h1>
        {
          !isSimple &&
          <p>{content}</p>
        }

        {
          !isSimple &&
          <Link className="button" to={cta.link}>{cta.text}</Link>
        }
      </div>
    )
  }
}

export default Hero