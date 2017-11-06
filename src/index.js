import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo'
import { client } from './appData/gcool/EndPoint.jsx'
// --------
import MainComp from './appData/00-Main.jsx'


const IndexComp = () => {

  return (
    <ApolloProvider client={client} >
     <MainComp />
    </ApolloProvider>
  )
}

ReactDOM.render(<IndexComp/>, document.getElementById("root"))


// --------------------------------------------------------------------
// Data & Locations:
// FullStackTutorila GraphQL (Gooood)
// https://www.howtographql.com/
// https://www.howtographql.com/basics/1-graphql-is-the-better-rest/
//
// GraphCool PlayGround:
// https://console.graph.cool/GameStore/playground
//
//
// Location of documentation:
// https://www.graph.cool/docs/quickstart/
//
// Graph.cool Video Tutorial:
// https://www.youtube.com/watch?v=xmri5pNR9-Y
// --------------------------------------------------------------------
