import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React from 'react'
import Home from '../page/Home'
import About from '../page/About'
import Login from '../page/Login'



 function RouterTest() {
  return (
    <Router>
      <>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/login" component={Login}/>

      </Switch>
    </Router>
  )
}
export default RouterTest