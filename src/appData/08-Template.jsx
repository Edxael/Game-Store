import React from 'react';
import { Link } from 'react-router-dom';

class Template extends React.Component {
  render() {
    const myStl = { textAlign: "left", padding: "8px 20px", border: "2px solid black", margin: "6px 0px", backgroundColor: "rgb(245, 232, 120)" }
    return(
      <div style={myStl} >
        <div><strong>Name: </strong>{this.props.name}</div>
        <div><strong>Phone: </strong>{this.props.phone}</div>

        <div><strong>More Info: </strong><Link to={"/" + this.props.name}>LINK</Link></div>
      </div>
    )
  }
}

export default Template;
