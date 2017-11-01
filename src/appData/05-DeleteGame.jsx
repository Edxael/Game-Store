import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const MUTATION = gql`
  mutation deleteGame(
              $id: ID!
            )
  {
    deleteGame( id: $id ) {
      id
    }
  }
`

class DeleteGame extends React.Component {
  constructor(props){
    super(props)
    this.state = { id: "" }
  }

  exe1 = ()=>{
    console.log("delete Game executed");
    console.log(this.state);

    this.props.mutate({  variables: { id:this.state.id }  })
    this.setState({ id: "" })
  }


  render(){
    return(
      <div>

        <h2>Delete Game</h2>
        <p>To DELETE a game from the DataBase provide the Game ID then click button <strong>Delete Game</strong></p>

        <form>
          <div><strong>Game ID: </strong><input type="text" placeholder="Game ID..." value={this.state.name} onChange={ (event) => { this.setState({ id: event.target.value }) } } /></div>
        </form>

        <button onClick={()=>{this.exe1()}} >Delete Game</button>

      </div>
    )
  }
}

export default graphql(MUTATION)(DeleteGame)
