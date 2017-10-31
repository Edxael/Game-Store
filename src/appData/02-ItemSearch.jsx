import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import Menu from './comps/01-Menu.jsx'


class ISearch extends Component {
  render() {
    console.log(this.props.data)
    const { loading, allTeams } = this.props.data
    return(
      <div>
        <div>02-ItemSearch</div>
        <Menu />
      </div>
    )
  }
}

const QUERY = gql`
  query {

  }
`

export default graphql(QUERY)(ISearch)
