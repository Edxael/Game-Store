import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const MUTATION = gql`
  mutation createGame(
              $description: String!,
              $genre: String!,
              $name: String!,
              $picture: String!,
              $price: Float!,
              $stock: Int!,
              $year: Int!
            )
  {
    createGame( description: $description, genre: $genre, name: $name, picture: $picture, price: $price, stock: $stock, year: $year ) {
      description
      genre
      name
      picture
      price
      stock
      year
    }
  }
`

const AddNewGame = (props) => {
  return(
    <div>
      <h1>Add Team</h1>
      <button onClick={e => props.mutate({
        variables: {
          description: "Cool Game",
          genre: "Action",
          name: "Mass Effect",
          picture: "Url Here",
          price: 35,
          stock: 5,
          year: 2015
        }
      })}>Add New-Game</button>
    </div>
  )
}

export default graphql(MUTATION)(AddNewGame)
