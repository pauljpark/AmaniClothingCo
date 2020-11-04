import React from 'react';
import './App.css';
import Home from './components/Home'
import About from './components/pages/About'
import Shop from './components/pages/Shop'
import Ambassador from './components/pages/Ambassador'
import FAQ from './components/pages/FAQ'
import Cart from './components/pages/Cart'
import Footer from './components/Footer'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/shop' component={Shop} />
            <Route path='/ambassador' component={Ambassador} />
            <Route path='/faq' component={FAQ} />
            <Route path='/cart' component={Cart} />
          </Switch>
      </div>
      <Footer />
    </Router>
  )
}

export default App;