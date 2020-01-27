import React from 'react'
import { FaShippingFast, FaUserNinja, FaFire } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

class OrderCTA extends React.Component {
  render() {
    return (
      <div className="order-cta">
        <div className="image">
          <img src="https://images.unsplash.com/photo-1565396319243-49b1f67c82a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80" alt="order"/>
        </div>

        <div className="content">
          <h2>What You Can <br />If You Order Food<br />From Us</h2>
          <div className="item">
            <FaUserNinja size="32" />
            <p>Cooked by a professional<br />chef in his field</p>
          </div>
          <div className="item">
            <FaShippingFast size="32" />
            <p>Quick delivery and Provision<br />So you don't have to wait long</p>
          </div>
          <div className="item">
            <FaFire size="32" />
            <p>Taste cuisine with a taste thay you <br />have never tasted before</p>
          </div>

          <Link className="button" to="/">
            <span>Order Now</span>
            <FiArrowRight size={32} />
          </Link>
        </div>
      </div>
    )
  }
}

export default OrderCTA
