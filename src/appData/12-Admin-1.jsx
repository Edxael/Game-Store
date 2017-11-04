import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class extends Component {
  render() {
    const pSty = { textAlign: "left" }
    const labelSty = { margin: "0px auto", display:"block", padding: "15px 0px 0px 15px" }
    const inputSty = { width: "100%" }
    const logCont = { width: "50%", margin: "0px auto", display:"block" }
    const btn1 = { margin: "0px auto", display:"block" }
    return(
      <div>
        <h1> Admin Log-In</h1>

          <div style={logCont}>
            <form action="" method="post" style={pSty} >
              <div>
                  <label style={labelSty} for="uname">Username:</label>
                  <input style={inputSty} type="text" id="uname" name="uname" />
              </div>
              <div>
                  <label style={labelSty} for="pword">Password:</label>
                  <input style={inputSty} type="password" id="pword" name="pword" />
              </div>

              <br/>
              <input style={btn1} type="submit" value="Long-In" />
            </form>
          </div>

            <Link to="/6">Topics</Link>
      </div>
    )
  }
}
