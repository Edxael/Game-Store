import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Teamplate from './08-Template.jsx'



class ISearch extends Component {
  constructor(props){
    super(props)
    this.state = { query: "" }
  }

  handleChange(){
    // console.log("Search: ", this.state.query)

    console.log(this.props.data.allGames);
    this.props.data.allGames
    .filter((game)=>{ return (game.name + " " + game.year + " " + game.genre + " " + game.price)toLowerCase().includes(this.state.query.toLowerCase()) })
    .map((game)=>{ return( <Template key={game.id} name={game.name} genre={game.genre} year={game.year} pic={game.picture} price={game.price} stock={game.stock} /> ) })

    // .filter((game) => { return game.person.name.toLowerCase().concat(sen.description.toLowerCase()).includes(this.state.query.toLowerCase()) })
    // .map((sen) => { return(<Teamplate key={sen.person.bioguideid} name={sen.person.name} phone={sen.phone} cx={sen.extra.contact_form} />) })
  }

  render() {
    console.log(this.props.data)
    const { loading, allGames } = this.props.data

    // const ContStyle = { border: "2px solid black", padding:"7px", margin:"10px", display: "flex", backgroundColor: "rgba(254, 254, 254, 0.5)" }
    // const PicStyle = { height:"150px", width: "auto" }
    // const InfoSty = { padding: "10px", textAlign: "left" }
    const liDeco = { listStyleType: "none" }
    const inputSt = { backgroundColor: "rgb(200, 184, 247)", width: "90%", height: "40px", marginBottom: "10px", paddingLeft: "7px" }
    return(
      <div>
        <h2>Search Game</h2>
          <p><strong>To find a Game type one of the following:</strong></p>
          <ul style={liDeco}>
            <li>Name</li>
            <li>Genre</li>
            <li>Year</li>
            <li>Price</li>
          </ul>

          <input style={inputSt} type="search" placeholder="Seach Here..." value={this.state.query}
            onChange={ (event) => { this.setState({ query: event.target.value }) } } />

          {this.handleChange()}

      </div>
    )
  }
}

const QUERY = gql`
  query {
    allGames{
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

export default graphql(QUERY)(ISearch)
