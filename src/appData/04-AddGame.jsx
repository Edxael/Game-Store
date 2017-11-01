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

class AddNewGame extends React.Component {
  constructor(props){
    super(props)
    this.state = { name: "", genre:"", picture:"", year:0, price:0, stock:0, description:"" }
  }

  exe1 = ()=>{
    console.log("Add Game executed");
    console.log(this.state);

    this.props.mutate({
            variables: {  name:this.state.name ,
                          genre:this.state.genre,
                          picture:this.state.picture,

                          year: parseInt(this.state.year),
                          price: parseInt(this.state.price),
                          stock: parseInt(this.state.stock),

                          description:this.state.description }
    })

    this.setState({ name: "", genre:"", picture:"", year:0, price:0, stock:0, description:"" })

  }


  render(){
    return(
      <div>

        <h2>Add Game</h2>
        <p>To add a game to the DataBase put the information requested then click button <strong>Add Game</strong></p>

        <form>
          <div><strong>Name:</strong><input type="text" placeholder="Name..." value={this.state.name} onChange={ (event) => { this.setState({ name: event.target.value }) } } /></div>
          <div><strong>Genre:</strong><input type="text" placeholder="genre..." value={this.state.genre} onChange={ (event) => { this.setState({ genre: event.target.value }) } } /></div>
          <div><strong>Picture:</strong><input type="text" placeholder="picture..." value={this.state.picture} onChange={ (event) => { this.setState({ picture: event.target.value }) } } /></div>

          <div><strong>Year:</strong><input type="number" placeholder="year..." value={this.state.year} onChange={ (event) => { this.setState({ year: event.target.value }) } } /></div>
          <div><strong>Price:</strong><input type="number" placeholder="price..." value={this.state.price} onChange={ (event) => { this.setState({ price: event.target.value }) } } /></div>
          <div><strong>Stock:</strong><input type="number" placeholder="stock..." value={this.state.stock} onChange={ (event) => { this.setState({ stock: event.target.value }) } } /></div>

          <div><strong>description:</strong><input type="text" placeholder="description..." value={this.state.description} onChange={ (event) => { this.setState({ description: event.target.value }) } } /></div>

        </form>

        <button onClick={()=>{this.exe1()}} >Add Game</button>

      </div>
    )
  }
}

export default graphql(MUTATION)(AddNewGame)
