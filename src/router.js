import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Index from './views/index'
import About from './views/about'
import Menu from './views/Menu'
import PlateView from './views/Plate'
import Contact from './views/contact'

export default () => {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/about" exact component={About} />
        <Route path="/menu" exact component={Menu} />
        <Route path="/plate/:slug" exact component={PlateView} />
        <Route path="/contact" exact component={Contact} />
      </Switch>

      <Footer />
    </Router>
  )
}