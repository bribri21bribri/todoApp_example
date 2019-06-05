import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import Student from './pages/Student'
import Header from './component7/Header'
import Footer from './component7/Footer'
import StudentManager from './component4/StudentManager'
import StudentModal from './component4/StudentModal'



 class App extends React.Component {
  render(){
    return (
      <Router>
      <>
       <Header />
          <StudentManager />

        {/* <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/student/:id" component={Student}/>
          <Route path="/student" component={Student} />
        </Switch> */}
        <Footer />
        </>
      </Router>
    )
  }
}
export default App