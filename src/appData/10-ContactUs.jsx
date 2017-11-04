import React, { Component } from 'react'

export default class extends Component {
  render() {
    const pSty = { textAlign: "left" }
    const labelSty = { margin: "0px auto", display:"block", padding: "15px 0px 0px 15px" }
    const inputSty = { width: "100%" }
    const logCont = { width: "50%", margin: "0px auto", display:"block" }
    const btn1 = { margin: "0px auto", display:"block" }
    const textArea = { width: "100%", height: "100px" }
    return(
      <div>
        <h1> Contact Us </h1>

          <div style={logCont}>
            <form action="" method="post" style={pSty} >
              <div>
                  <label style={labelSty} for="uname">Name:</label>
                  <input style={inputSty} type="text" id="name" name="name" />
              </div>
              <div>
                  <label style={labelSty} for="email">Email:</label>
                  <input style={inputSty} type="email" id="email" name="email" />
              </div>
              <div>
                  <label style={labelSty} for="msg">Comments:</label>
                  <textarea style={textArea} id="msg" name="user_message"></textarea>
              </div>

              <br/>
              <input style={btn1} type="submit" value="Make Contact" />
            </form>
          </div>

      </div>
    )
  }
}
