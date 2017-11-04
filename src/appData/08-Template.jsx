import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class Template extends React.Component {
  render() {
    const ContStyle = { width: "70%", border: "2px solid black", padding:"7px", margin:"10px auto", display: "flex", backgroundColor: "rgba(119, 247, 255, 0.5)" }
    const PicStyle = { height:"150px", width: "auto" }
    const InfoSty = { padding: "10px", textAlign: "left" }
    return(
      <div style={ContStyle} >

        <div>
          <img style={PicStyle} src={this.props.pic} alt="Missing Pic"/>
        </div>

        <div style={InfoSty}>
          <div><strong>Name: </strong>{this.props.name}</div>
          <div><strong>Genre: </strong>{this.props.genre}</div>
          <div><strong>Year: </strong>{this.props.year}</div>
          <div><strong>Price: </strong>{this.props.price}</div>
          <div><strong>In-Stock: </strong>{this.props.stock}</div>
          <div><strong>More Info..: </strong><Link to={`/${this.props.id}`}>LINK</Link></div>

        </div>

      </div>
    )
  }
}

export default Template;


          // <div><strong>More Info: </strong><Link to={"/" + this.props.id} target="_blank" >LINK</Link></div>
