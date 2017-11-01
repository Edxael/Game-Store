import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'



class ISearch extends Component {
  render() {
    console.log(this.props.data.allGames)
    // const { loading, allGames } = this.props.data
    return(
      <div>
        <div>02-ItemSearch</div>
        
      </div>
    )
  }
}

const QUERY = gql`
  query {
    allGames{
      name
    }
  }
`

export default graphql(QUERY)(ISearch)
