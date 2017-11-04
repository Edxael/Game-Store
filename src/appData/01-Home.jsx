import React, { Component } from 'react'
import gameImg1 from './img/co1.gif'

export default class extends Component {
  render() {
    return(
      <div>
        <h1>GAME STORE</h1>
        <p>Welcome to the GAME STORE, here you can search and find your favorite videogames.</p>

        <img src={gameImg1} alt="Missing Picture"/>

        <p>Get your Games and Gear-Up</p>
      </div>
    )
  }
}
