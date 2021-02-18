import React from 'react';
import './App.css';
import Home from './components/Home'
import About from './components/pages/About'
import Shop from './components/pages/Shop'
import Ambassador from './components/pages/Ambassador'
import FAQ from './components/pages/FAQ'
import Cart from './components/pages/Cart'
import Footer from './components/Footer'
import Success from './components/pages/Success'
import Cancel from './components/pages/Cancel'
import Admin from './admin/admin'
import Add from './admin/add'
import Edit from './admin/edit'

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
            <Route path='/success' component={Success} />
            <Route path='/cancel' component={Cancel} />
            <Route path='/admin' component={Admin} />
            <Route path='/add' component={Add} />
            <Route path='/edit/:id' component={Edit} />
          </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App;