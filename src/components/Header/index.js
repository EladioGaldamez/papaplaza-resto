import React from 'react'
import { NavLink } from 'react-router-dom'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bgDark: false,
    }

    this.onScroll = this.onScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

  onScroll(event) {
    if (window.pageYOffset > 0) {
      this.setState({ bgDark: true })
    } else {
      this.setState({ bgDark: false })
    }
  }

  render() {
    const {
      bgDark,
    } = this.state

    return (
      <div className={`header ${bgDark ? 'bg-dark' : ''}`}>
        <div className="brand">
          <span>Papaplaza Resto</span>
        </div>

        <div className="navigation">
          <NavLink activeClassName="active" to="/"><span>Home</span></NavLink>
          <NavLink activeClassName="active" to="/about"><span>About</span></NavLink>
          <NavLink activeClassName="active" to="/menu"><span>Menu</span></NavLink>
          <NavLink activeClassName="active" to="/contact"><span>Contact</span></NavLink>
        </div>
      </div>
    )
  }
}

export default Header
