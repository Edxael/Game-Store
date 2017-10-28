import React from 'react'
import ReactDOM from 'react-dom'

import MainComp from './appData/01-Main.jsx'

const IndexComp = () => {
  return (
    <div>
      <MainComp/>
    </div>
  )
}

ReactDOM.render(<IndexComp/>, document.getElementById("root"))
