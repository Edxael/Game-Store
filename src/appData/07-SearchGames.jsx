import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Template from './08-Template.jsx'



class ISearch extends Component {
  constructor(props){
    super(props)
    this.state = { query: "" }
  }

  // handleChange(){
  //   console.log(this.props.data.allGames);
  //   const { loading, allGames } = this.props.data
  //   (!loading && allGames)
  //   .filter((game)=>{ return ( (`${game.name} ${game.year} ${game.genre} ${game.price}`).toLowerCase().includes(this.state.query.toLowerCase()) ) })
  //   .map((game)=>{ return( <Template key={game.id} name={game.name} genre={game.genre} year={game.year} pic={game.picture} price={game.price} stock={game.stock} /> ) })
  // }

  render() {
    console.log(this.props.data.allGames);
    const { loading, allGames } = this.props.data
    const inputSt = { backgroundColor: "rgb(200, 184, 247)", width: "90%", height: "40px", marginBottom: "10px", paddingLeft: "7px" }

    return(
      <div>
        <h2>Search Game</h2>
          <p><strong>To find a Game type one of the following:</strong> Name, Genre, Year, Price</p>

          <input style={inputSt} type="search" placeholder="Seach Here..." value={this.state.query}
            onChange={ (event) => { this.setState({ query: event.target.value }) } } />

          {
            !loading && allGames
            .filter((game)=>{ return ( (`${game.name} ${game.year} ${game.genre} ${game.price}`).toLowerCase().includes(this.state.query.toLowerCase()) ) })
            .map((game)=>{ return( <Template key={game.id} id2={game.id} name={game.name} genre={game.genre} year={game.year} pic={game.picture} price={game.price} stock={game.stock} /> ) })
          }

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
