import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import * as Cart from './locStorage/cart.js'

let GameID = window.location.href.split("/").pop()
console.log(GameID)
console.log(typeof GameID)


class Child extends Component {
  state = { show: false, keys: [], data: {}, added: false }

  exe1 = ()=>{
    this.setState({ show: true })
  }

  exe2 = ()=>{
    console.log("Helo ")
    console.log(this.props.data.Game.name)
    const mainSty = { margin: "0px 25%", backgroundColor: "rgba(119, 247, 255, 0.5)", padding: "25px" }
    const imgStyl = { width: "320px", height: "430px" }
    const infoSty = { textAlign: "left", padding: "0px 10px" }
    const lineSty = { backgroundColor: "black", height: "3px" }
    const mercInf = { display: "flex", justifyContent: "space-between", padding: "0px 25px", fontSize: "20px" }
    return(
      <div style={mainSty} >
        <img style={imgStyl} src={this.props.data.Game.picture} alt="Missing Picture"/>
        <h2>{this.props.data.Game.name}</h2>

        <div style={infoSty}>
          <div><strong>Year: </strong> {this.props.data.Game.year}</div>
          <div><strong>Genre: </strong> {this.props.data.Game.genre}</div>
          <div><strong>Description: </strong> {this.props.data.Game.description}</div>
        </div>

        <hr style={lineSty}/>

        <div style={mercInf}>
          <div><strong>Price: </strong> $ {this.props.data.Game.price}.00</div>
          <div><strong>Stock: </strong> {this.props.data.Game.stock}</div>
        </div>

      </div>
    )
  }

  exe3 = ()=>{

    if (!Cart.get('cart')) {
      Cart.add('cart', [])
    }

    let gameData = this.props.data.Game
    console.log("added to the cart");
    let myLocInfo = Cart.get('cart')
    console.log(myLocInfo);

    myLocInfo.push({ id: gameData.id, name: gameData.name, year: gameData.year, genre: gameData.genre, price: gameData.price, stock: gameData.stock, pic: gameData.picture })

    Cart.add('cart', myLocInfo)
    console.log(Cart.get('cart'))

    this.setState({ added: true })

    setTimeout(()=>{ this.setState({ added: true }) }, 3500)
  }


  render(){
    const { loading, Game } = this.props.data
    // console.log(Object.keys(Game))
    console.log(Game);
    // const dataBox = { textAlign: "left", border: "2px solid black", padding: "7px", backgroundColor: "rgb(251, 255, 177)" }
    // const linkReturn = { border: "2px solid black", padding: "4px 6px", backgroundColor: "rgb(141, 254, 52)" }
    const gralSty = { backgroundColor: "rgba(192, 174, 242, 0.5)", padding: "25px", width: "80%", margin: "0px auto" }
    const buttSty = { width: "20%", margin: "15px" }
    return (
      <div style={gralSty}>
        <h1>Game Info Info</h1>
        <br/>
        <button onClick={this.exe1}>Show Game Data</button>
        <br/><br/>

        { this.state.show ? React.createElement(this.exe2) : <div>No Data....</div> }

        { this.state.added ? <h2>Added to your cart</h2> : <div></div> }

        <button style={buttSty} onClick={this.exe3}>Add To Cart</button>



      </div>
    )
  }
}


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




  // exe1 = ()=>{
  //   console.log("Inside of Exe1", this.props.data)
  //   const { loading, Game } = this.props.data
  //   console.log("Game: ", Game );
  //   return(
  //     <div>
  //       <div>{Game.id}</div>
  //     </div>
  //   )
  // }

// {React.createElement(this.exe1)}



// <div>{
//     !loading && allGames
//         .filter((x)=>{return x.key === match.params.key})
//         .map((x)=>{return(
//           <div style={dataBox} key={x.id}>
//
//             <img src={x.picture} alt="Missing Picture"/>
//             <hr/>
//
//             <div><strong>Name: </strong>{x.name}</div>
//             <div><strong>Year: </strong>{x.year}</div>
//             <div><strong>Price: </strong>{x.price}</div>
//             <div><strong>Stock: </strong>{x.stock}</div>
//             <div><strong>Description: </strong>{x.description}</div>
//
//           </div>
//         )})
//   }</div>












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
