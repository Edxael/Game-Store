import React, { Component } from 'react'
import gameImg1 from './img/co1.gif'

export default class extends Component {
  render() {
    const pageSty = { border: "2px solid white", backgroundColor: "rgba(254, 254, 254, 0.5)", width: "75%", margin: "0px auto", padding: "15px" }
    return(
      <div style={pageSty}>
        <h1>GAME STORE</h1>
        <p>Welcome to the GAME STORE, here you can search and find your favorite videogames.</p>

        <img src={gameImg1} alt="Missing Picture"/>

        <p>Get your Games and Gear-Up br:m-11.5.20.47</p>
      </div>
    )
  }
}
