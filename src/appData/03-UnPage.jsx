import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import * as Cart from './locStorage/cart.js'


// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------

export default class extends Component {
  state = { added: false, cuga: {}, show: false }


// --------------------------------------------------------------------------------------------------------------
      exe3 = ()=>{
        if (!Cart.get('cart')) {
          Cart.add('cart', [])
        }

        let gameData = this.state.cuga
        console.log("added to the cart");
        let myLocInfo = Cart.get('cart')
        console.log("MyLocal Info: ", myLocInfo);
        myLocInfo.push({ id: gameData.id, name: gameData.name, year: gameData.year, genre: gameData.genre, price: gameData.price, stock: gameData.stock, pic: gameData.picture })
        Cart.add('cart', myLocInfo)
        console.log(Cart.get('cart'))
        this.setState({ added: true })
        setTimeout(()=>{ this.setState({ added: true }) }, 3500)
      }

      componentDidMount(){
        let aGa = Cart.get('aGa')
        const token = this.props.match.params.id
        let preGame = aGa.filter((x)=>{ return x.id === token })
        let Game = preGame[0]
        console.log("My Game: ", Game);
        this.setState({ cuga: Game })
        this.setState({ show: true })
      }

// --------------------------------------------------------------------------------------------------------------
  render(){
    const gralSty = { backgroundColor: "rgba(192, 174, 242, 0.5)", padding: "25px", width: "80%", margin: "0px auto" }
    const buttSty = { width: "20%", margin: "15px" }
    const mainSty = { margin: "0px 25%", backgroundColor: "rgba(119, 247, 255, 0.5)", padding: "25px" }
    const imgStyl = { width: "320px", height: "430px" }
    const infoSty = { textAlign: "left", padding: "0px 10px" }
    const lineSty = { backgroundColor: "black", height: "3px" }
    const mercInf = { display: "flex", justifyContent: "space-between", padding: "0px 25px", fontSize: "20px" }

    return (
      <div style={gralSty}>
        <h1>Game Info Info.</h1>


        { this.state.show ?

          <div style={mainSty} >
            <img style={imgStyl} src={this.state.cuga.picture} alt="Missing Picture"/>
            <h2>{this.state.cuga.name}</h2>

            <div style={infoSty}>
              <div><strong>Year: </strong> {this.state.cuga.year}</div>
              <div><strong>Genre: </strong> {this.state.cuga.genre}</div>
              <div><strong>Description: </strong> {this.state.cuga.description}</div>
            </div>

            <hr style={lineSty}/>

            <div style={mercInf}>
              <div><strong>Price: </strong> $ {this.state.cuga.price}.00</div>
              <div><strong>Stock: </strong> {this.state.cuga.stock}</div>
            </div>
          </div>

        : <h3>Loading Datat...</h3>}



        { this.state.added ? <h2>Added to your cart</h2> : <div></div> }
        <button style={buttSty} onClick={this.exe3}>Add To Cart</button>
      </div>
    )
  }
}
