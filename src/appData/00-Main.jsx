import React, { Component } from 'react'
import Banner from './img/logo1.jpg'
import { Nav, NavItem } from 'reactstrap';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


import Home from './01-Home.jsx'
import SearchGame from './07-SearchGames.jsx'
import MyCart from './09-MyCart.jsx'
import UniPage from './03-UnPage.jsx'

import ContacUs from './10-ContactUs.jsx'
import AboutUs from './11-AboutUs.jsx'
import Admin1 from './12-Admin-1.jsx'
import Admin2 from './13-Admin-2.jsx'





export default class extends Component {
  render() {

    let brSty = { width: "80%" }
    let MainDiv = { textAlign: "center", backgroundColor: "gray", padding: "20px", height: "100%" }
    let btn1 = { backgroundColor: "black", marginRight: "3px" }
    let bar1 ={ width: "100%", marginTop: "15px", display: "flex", justifyContent: "center" }
    const picSty = { margin: "0px auto", display: "block", width: "80%", height: "auto" }

    return(
      <div style={MainDiv}>

        <Router>
          <div>
            <img style={picSty} src={Banner} alt="Missing Pic"/>

              <div>
                <Nav style={bar1}>
                  <NavItem> <Link style={btn1} to="/">Home</Link> </NavItem>
                  <NavItem> <Link style={btn1} to="/1">Search Games</Link> </NavItem>
                  <NavItem> <Link style={btn1} to="/2">My Cart</Link> </NavItem>
                </Nav>
              </div>

              <hr style={ brSty } />

              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/1" component={SearchGame}/>
                <Route path="/2" component={MyCart}/>
                <Route path="/3" component={ContacUs}/>
                <Route path="/4" component={AboutUs}/>
                <Route path="/5" component={Admin1}/>
                <Route path="/6" component={Admin2}/>
                <Route path="/:id" component={UniPage} />
              </Switch>

              <br/><br/>
              <hr style={ brSty } />
              <div> <Link to="/3">Contact-Us</Link> | <Link to="/4">About-Us</Link> | <Link to="/5">Admin</Link> </div>
          </div>
        </Router>

      </div>
    )
  }
}
