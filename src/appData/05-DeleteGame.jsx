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
    const MainSty = { }
    const mySty = { padding: "10px", textAlign: "left", backgroundColor: "rgba(119, 247, 255, 0.5)", border: "2px solid black" }
    const labelSty = { margin: "0px auto", display:"block", padding: "15px 0px 0px 15px" }
    const inputSty = { width: "100%" }
    const btnSty = { width: "200px", margin: "0px auto", display: "block", height: "45px" }
    return(
      <div style={MainSty}>

        <h2>Delete Game</h2>
        <p>To DELETE a game from the DataBase provide the Game ID then click button <strong>Delete Game</strong></p>

        <div style={mySty}>
          <form>
            <div><label style={labelSty}>ID in Graph.cool:  </label> <input style={inputSty} type="text" placeholder="Game ID..." value={this.state.name} onChange={ (event) => { this.setState({ id: event.target.value }) } } /></div>
          </form>
          <br/>
          <button style={btnSty} onClick={()=>{this.exe1()}} >Delete Game</button>
        </div>

      </div>
    )
  }
}

export default graphql(MUTATION)(DeleteGame)
