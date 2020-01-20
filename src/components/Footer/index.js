import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="brand">
          <span>Papaplaza Resto</span>
        </div>
        
        <div className="info">
          <h3>Visit</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare sapien vel euismod vulputate. Aenean interdum nisl non iaculis pulvinar. Donec vestibulum ullamcorper orci, sed varius ex.</p>
        </div>

        <div className="info">
          <h3>Reservation</h3>
          <p>+1-202-555-0169</p>
        </div>

        <div className="info">
          <h3>Opening Hours</h3>
          <p>OPENING HOURS</p>
          <p>Sunday - Thursday, 10AM - 11PM</p>
          <p>Friday - Saturday, 10AM - 12PM</p>
        </div>
      </footer>
    )
  }
}

export default Footer