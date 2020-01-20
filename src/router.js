import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Index from './views/index'

export default () => {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/about" />
        <Route path="/menu" />
        <Route path="/contact" />
      </Switch>

      <Footer />
    </Router>
  )
}