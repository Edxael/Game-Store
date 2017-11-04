import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import * as Cart from './locStorage/cart.js'

let GameID = window.location.href.split("/").pop()

// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------

class Child extends Component {
  // state = { show: false, keys: [], data: {}, added: false }
  state = { added: false }


// --------------------------------------------------------------------------------------------------------------
      exe3 = ()=>{
        if (!Cart.get('cart')) {
          Cart.add('cart', [])
        }

        let gameData = this.props.data.Game
        console.log("added to the cart");
        let myLocInfo = Cart.get('cart')
        console.log("MyLocal Info: ", myLocInfo);
        myLocInfo.push({ id: gameData.id, name: gameData.name, year: gameData.year, genre: gameData.genre, price: gameData.price, stock: gameData.stock, pic: gameData.picture })
        Cart.add('cart', myLocInfo)
        console.log(Cart.get('cart'))
        this.setState({ added: true })
        setTimeout(()=>{ this.setState({ added: true }) }, 3500)
      }

// --------------------------------------------------------------------------------------------------------------
  render(){
    let aGa = Cart.get('aGa')
    console.log("The aGa Local Storage: ", aGa)

    // console.log("The Match: ", this.props.match.params.id)
    const token = this.props.match.params.id
    console.log("Token: ", typeof token);

    let preGame = aGa.filter((x)=>{ return x.id === token })
    let Game = preGame[0]
    console.log("My Game: ", Game);



    const { loading } = this.props.data

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


        { !loading ?

          <div style={mainSty} >
            <img style={imgStyl} src={Game.picture} alt="Missing Picture"/>
            <h2>{Game.name}</h2>

            <div style={infoSty}>
              <div><strong>Year: </strong> {Game.year}</div>
              <div><strong>Genre: </strong> {Game.genre}</div>
              <div><strong>Description: </strong> {Game.description}</div>
            </div>

            <hr style={lineSty}/>

            <div style={mercInf}>
              <div><strong>Price: </strong> $ {Game.price}.00</div>
              <div><strong>Stock: </strong> {Game.stock}</div>
            </div>
          </div>

        : <h3>Loading Datat...</h3>}



        { this.state.added ? <h2>Added to your cart</h2> : <div></div> }
        <button style={buttSty} onClick={this.exe3}>Add To Cart</button>
      </div>
    )
  }
}

// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------

// console.log("El Parametro: ", this.props.match.params.id);

// console.log(GameID)
// console.log(typeof GameID)

const QUERY = gql`
query {
  Game(id: "${window.location.href.split("/").pop()}" ){
    id
    name
    year
    genre
    picture
    description
    price
    stock
  }
}
`

export default graphql(QUERY)(Child)

// let aGa = Cart.get('aGa')
// console.log("The aGa: ", aGa)
// console.log("The Match: ", this.match.params.id)














        // console.log(this.props.data.Game.name)

// { this.state.show ? React.createElement(this.exe2) : <div>No Data....</div> }


// const QUERY = gql`
// query {
//   Game(id: "cj9hq62sxn6370168stf3styh"){
//     id
//     name
//     year
//     genre
//     picture
//     description
//     price
//     stock
//   }
// }
// `




// let gameData = this.props.data.Game
// let fInfo = aGa.filter((x)=>{ return( x.id ===  ) })

// let aGa = Cart.get('aGa')
// console.log("The aGa: ", aGa)
// console.log("The Match: ", this.match.params.id)










      // exe2 = async ()=>{
      //
      //   const mainSty = { margin: "0px 25%", backgroundColor: "rgba(119, 247, 255, 0.5)", padding: "25px" }
      //   const imgStyl = { width: "320px", height: "430px" }
      //   const infoSty = { textAlign: "left", padding: "0px 10px" }
      //   const lineSty = { backgroundColor: "black", height: "3px" }
      //   const mercInf = { display: "flex", justifyContent: "space-between", padding: "0px 25px", fontSize: "20px" }
      //
      //   return(
      //     <div style={mainSty} >
      //       <img style={imgStyl} src={this.props.data.Game.picture} alt="Missing Picture"/>
      //       <h2>{this.props.data.Game.name}</h2>
      //
      //       <div style={infoSty}>
      //         <div><strong>Year: </strong> {this.props.data.Game.year}</div>
      //         <div><strong>Genre: </strong> {this.props.data.Game.genre}</div>
      //         <div><strong>Description: </strong> {this.props.data.Game.description}</div>
      //       </div>
      //
      //       <hr style={lineSty}/>
      //
      //       <div style={mercInf}>
      //         <div><strong>Price: </strong> $ {this.props.data.Game.price}.00</div>
      //         <div><strong>Stock: </strong> {this.props.data.Game.stock}</div>
      //       </div>
      //     </div>
      //   )
      // }






      //
      // const mainSty = { margin: "0px 25%", backgroundColor: "rgba(119, 247, 255, 0.5)", padding: "25px" }
      // const imgStyl = { width: "320px", height: "430px" }
      // const infoSty = { textAlign: "left", padding: "0px 10px" }
      // const lineSty = { backgroundColor: "black", height: "3px" }
      // const mercInf = { display: "flex", justifyContent: "space-between", padding: "0px 25px", fontSize: "20px" }
      // return(
      //   <div style={mainSty} >
      //     <img style={imgStyl} src={spe.picture} alt="Missing Picture"/>
      //     <h2>{spe.name}</h2>
      //
      //     <div style={infoSty}>
      //       <div><strong>Year: </strong> {spe.year}</div>
      //       <div><strong>Genre: </strong> {spe.genre}</div>
      //       <div><strong>Description: </strong> {spe.description}</div>
      //     </div>
      //
      //     <hr style={lineSty}/>
      //
      //     <div style={mercInf}>
      //       <div><strong>Price: </strong> $ {spe.price}.00</div>
      //       <div><strong>Stock: </strong> {spe.stock}</div>
      //     </div>
      //   </div>
      // )
