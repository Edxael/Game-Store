import React, { Component } from 'react'
import Banner from './img/logo1.jpg'
import { Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

// import ItemSearch from './02-ItemSearch.jsx'
import AddGame from './04-AddGame.jsx'
import DelGame from './05-DeleteGame.jsx'
// import UnItemFullPage from './03-UnItemFullPage.jsx'


export default class extends Component {
  render() {

    let brSty = { width: "80%" }
    let MainDiv = { textAlign: "center", backgroundColor: "gray", padding: "20px", height: "100vh" }
    let btn1 = { backgroundColor: "black", marginRight: "3px" }
    let bar1 ={ width: "100%", marginTop: "15px", display: "flex", justifyContent: "center" }

    return(
      <div>

        <Router>
          <div style={MainDiv}>
            <img src={Banner} alt="Missing Pic"/>

              <div>
                <Nav style={bar1}>
                  <NavItem> <Link style={btn1} to="/">Add Game</Link> </NavItem>
                  <NavItem> <Link style={btn1} to="/1">Delete Game</Link> </NavItem>
                </Nav>
              </div>

              <hr style={ brSty } />

              <Switch>
                <Route exact path="/" component={AddGame}/>
                <Route path="/1" component={DelGame}/>
              </Switch>
          </div>
        </Router>


      </div>
    )
  }
}



// <ItemSearch/>

// <AddGame/>
// <hr/>
// <hr/>
// <DelGame/>
