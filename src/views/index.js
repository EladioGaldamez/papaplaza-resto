import React from 'react'
import Hero from '../components/Hero'
import FeaturedFood from '../components/FeaturedFood'
import CategorizedMenu from '../components/CategorizedMenu'
import OrderCTA from '../components/OrderCTA'

class Index extends React.Component {
  render() {
    return (
      <section>
        <Hero
          isSimple={false}
          title="Premium and authentic cooking from the experts"
          content="Feel the sensation of pizza from a taste that never existed, and unparalleled pleasure"
          cta={{ text: 'Menu', link: '/menu' }}
          background="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" />

        <FeaturedFood
          title="Our featured food"
          content="Feel the cuisine a test like never before" />

        <CategorizedMenu
          title="Our Categorized Menu"
           />

        <OrderCTA />
      </section>
    )
  }
}

export default Index