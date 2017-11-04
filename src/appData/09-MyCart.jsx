import React, { Component } from 'react'
import * as Cart from './locStorage/cart.js'

class MyCart extends Component {
  state = { submit: false }

  submitOrder = ()=>{
    console.log("Order submited")
    this.setState({ submit: true })

    setTimeout(()=>{
      this.setState({ submit: false })
      Cart.add('cart', [])
    }, 3500)
  }

  render() {

    let preTotal = 0
    let taxes = 0
    let finalTotal = 0

    if (!Cart.get('cart')) {
      Cart.add('cart', [])
      preTotal = 0
      taxes = 0
      finalTotal = 0
    }else {
      let arr = Cart.get('cart')
      let arrPrices = arr.map((x)=>{ return x.price })
      if(arrPrices.length === 0){
        preTotal = 0
      }else{
        preTotal = arrPrices.reduce((pv, cv)=>{ return pv + cv })
      }


      taxes = (preTotal * 0.07).toFixed(2)
      finalTotal = (preTotal + (preTotal * 0.07)).toFixed(2)
    }






    const twoPillars = { display: "flex", width: "75%", margin: "0px auto" }
    const ContStyle = { border: "2px solid black", padding:"7px", margin:"10px", display: "flex", backgroundColor: "rgba(254, 254, 254, 0.5)" }
    const PicStyle = { height:"150px", width: "auto" }
    const InfoSty = { padding: "10px", textAlign: "left" }
    const Items = { width: "70%" }
    const Totals = { width: "30%", border: "2px solid black", margin:"10px", backgroundColor: "rgba(119, 247, 255, 0.5)", padding: "0px 15px" }
    const totLines = { display: "flex", justifyContent: "space-between", padding: "0px 10px"}
    const ordsub = { backgroundColor: "rgba(111, 251, 0, 0.5)" }
    return(
      <div>

        { this.state.submit ? <h1 style={ordsub}>Your Order has been Submited</h1> : <h1>My Shoping Cart</h1> }

        <div style={twoPillars}>

          <div style={Items}>
            {
              (Cart.get('cart') === []) ?
                <h2>No Items in your Cart.</h2>

              :

                Cart.get('cart').map((game)=>{ return(
                  <div key={game.id} style={ContStyle}>
                    <div>
                      <img style={PicStyle} src={game.pic} alt="Missing Pic"/>
                    </div>
                    <div style={InfoSty}>
                      <div><strong>Name:</strong>{game.name}</div>
                      <div><strong>Year:</strong>{game.year}</div>
                      <div><strong>Genre:</strong>{game.genre}</div>
                      <div><strong>Price:</strong>${game.price}.00</div>
                      <br/>
                      <button>Delete from MyCart</button>
                    </div>
                  </div>
                ) })


            }
          </div>

          <div style={Totals}>
            <h3>Items in Cart: {Cart.get('cart').length}</h3>
            <button onClick={ this.submitOrder }>Submit Order</button>
            <br/><br/><br/>
            <div>
              <div style={totLines}><div>Total:</div><div>$ { preTotal }.00</div></div>
              <div style={totLines}><div>Taxes:</div><div>$ { taxes }</div></div>
              <div style={totLines}><div>Discouts:</div><div>-$0.00</div></div>
              <hr/>
              <div style={totLines}><div>Final Total:</div><div>$ { finalTotal }</div></div>
            </div>
          </div>

        </div>

      </div>
    )
  }
}


export default MyCart


// <div style={totLines}><div>Total:</div><div>$ { Cart.get('cart').reduce((pv, cv)=>{ return pv.price + cv.price }) }.00</div></div>
// <div style={totLines}><div>Taxes:</div><div>$ { parseInt(Cart.get('cart').reduce((pv, cv)=>{ return pv.price + cv.price }))  }</div></div>
