import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'



class ISearch extends Component {
  render() {
    console.log(this.props.data)
    const { loading, allGames } = this.props.data

    const ContStyle = { border: "2px solid black", padding:"7px", margin:"10px", display: "flex", backgroundColor: "rgba(254, 254, 254, 0.5)" }
    const PicStyle = { height:"150px", width: "auto" }
    const InfoSty = { padding: "10px", textAlign: "left" }

    return(
      <div>
        <h2>All Games in DataBase</h2>
        <p>Here is the list of all the games in the database, make shure all info is correct.</p>

        <div>
          {!loading && allGames.map( (game) => { return(
          <div style={ContStyle} key={game.id}>

            <div>
              <img style={PicStyle} src={game.picture} alt="Missing Picture"/>
            </div>

            <div style={InfoSty}>
              <div><strong>Name: </strong>{game.name}</div>
              <div><strong>Genre: </strong>{game.genre}</div>
              <div><strong>Year: </strong>{game.year}</div>
              <div><strong>Price: </strong>{game.price}</div>
              <div><strong>Stock: </strong>{game.stock}</div>
              <div><strong>ID: </strong>{game.id}</div>
              <div><strong>Description: </strong>{game.description}</div>
            </div>

          </div>
        ) } )}
        </div>

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
