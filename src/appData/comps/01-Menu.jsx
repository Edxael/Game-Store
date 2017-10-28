import React, { Component } from 'react'
import Banner from '../img/logo2.png'

export default class extends Component {
  render() {

    let btn1 = { backgroundColor: "black", marginRight: "3px" }
    let bar1 ={ width: "100%", marginTop: "15px", display: "flex", justifyContent: "center" }
    return(
      <div>
        <div>03-Menu</div>
        <img src={Banner} alt="Missing Pic"/>




      </div>
    )
  }
}
