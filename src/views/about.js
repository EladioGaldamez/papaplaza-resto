import React from 'react'
import Hero from '../components/Hero'

class About extends React.Component {
  render() {
    return (
      <div className="about-page">
        <Hero 
          isSimple={true}
          background="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
          title="About us"
        />

        <div className="information-section">
          <div className="image">
            <img src="https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="" />
          </div>
          <div className="content">
            <h2>Ambience</h2>
            <p>Vivamus lacinia mattis nunc non commodo. Phasellus sit amet neque eget mauris mollis blandit. Phasellus efficitur ipsum id nulla efficitur varius in eget metus. Sed egestas massa et quam rutrum, vitae convallis massa ullamcorper.</p>
            <img src="https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80" alt="" />
          </div>
        </div>

        <div className="information-section reverse">
          <div className="image">
            <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1470&q=80" alt="" />
          </div>
          <div className="content">
            <h2>Culinary</h2>
            <p>Vivamus lacinia mattis nunc non commodo. Phasellus sit amet neque eget mauris mollis blandit. Phasellus efficitur ipsum id nulla efficitur varius in eget metus. Sed egestas massa et quam rutrum, vitae convallis massa ullamcorper.</p>
            <img src="https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"alt="" />
          </div>
        </div>
      </div>
    )
  }
}

export default About