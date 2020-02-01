import React from 'react'
import Hero from '../components/Hero'

class Contact extends React.Component {
  render() {
    return (
      <div className="contact-page">
        <Hero 
          isSimple={true}
          background="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
          title="Contact"
        />
        <div className="contact-form">
          <div className="image">
            <img src="https://images.unsplash.com/photo-1543340842-7b049d42a0ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1384&q=80" alt="" />
          </div>
          <div className="contact">
            <div className="phone-number">
              <h1>Call us</h1>
              <h2>(+123) 456 7890</h2>

              <p>Maecenas non dolor tincidunt, malesuada orci ac, volutpat ante. Ut a turpis eget urna maximus elementum sed sollicitudin diam.</p>
            </div>

            <div className="opening-hours">
              <h1>Opening hours</h1>
              <p>Pellentesque rutrum tortor sed eros tempor vehicula. Fusce aliquet a mi at tempor. Fusce sed turpis quis mi eleifend dignissim.</p>

              <div className="item">
                <span>Sunday to Thursday</span>
                <span>10AM to 11PM</span>
              </div>

              <div className="item">
                <span>Friday and Saturday</span>
                <span>10AM to 12PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact