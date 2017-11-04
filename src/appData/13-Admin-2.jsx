import React, { Component } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import AllGamesList from './02-AllGamesList.jsx'
import AddGame from './04-AddGame.jsx'
import DelGame from './05-DeleteGame.jsx'
import UpdateGame from './06-Update.jsx'



export default class extends Component {
  render() {
    let brSty = { width: "80%" }
    let MainDiv = { textAlign: "center", backgroundColor: "gray", padding: "20px", height: "100vh" }
    let pageSty = { border: "2px solid white", backgroundColor: "rgba(254, 254, 254, 0.5)", width: "75%", margin: "0px auto", padding: "15px" }
    let btn1 = { backgroundColor: "black", marginRight: "3px" }
    let bar1 ={ width: "100%", marginTop: "15px", display: "flex", justifyContent: "center" }
    return(
      <div>
        <h1> Administrator Dashboard. </h1>
          <Router>

            <div>
              <div>
                <Nav style={bar1}>
                  <NavItem> <Link style={btn1} to="/10">All Games</Link> </NavItem>
                  <NavItem> <Link style={btn1} to="/7">Add Game</Link> </NavItem>
                  <NavItem> <Link style={btn1} to="/8">Update Game</Link> </NavItem>
                  <NavItem> <Link style={btn1} to="/9">Delete Game</Link> </NavItem>
                </Nav>
              </div>

              <hr style={ brSty } />

              <div style={pageSty}>
                <Switch>
                  <Route exact path="/10" component={AllGamesList}/>
                  <Route exact path="/7" component={AddGame}/>
                  <Route exact path="/8" component={UpdateGame}/>
                  <Route exact path="/9" component={DelGame}/>
                </Switch>
              </div>


            </div>
          </Router>
      </div>
    )
  }
}


// <Route exact path="/6/7" component={AddGame}/>
// <Route exact path="/6/8" component={UpdateGame}/>
// <Route exact path="/6/9" component={DelGame}/>
