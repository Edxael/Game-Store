import React, { Component } from 'react'
import imgER from './img/me1.png'
import imgCJ from './img/cj1.jpg'

export default class extends Component {
  render() {
    const autors = { display: "flex", justifyContent: "center" }
    const profile = { margin: "0px 10px" }
    const picSty = { width: "213px", height: "213px", border: "4px solid white" }
    return(
      <div>
        <h1> About Us </h1>
        <p>This site was developed by:</p>

        <div>
          <div style={autors}>

            <div style={profile}>
              <div>
                <div>
                  <img style={picSty} src={imgER} alt="Missing Picture"/>
                </div>
              </div>
              <div>
                <br/>
                <div><strong>Name: </strong>Edmundo Rubio</div>
                <div><strong>GitHub: </strong><a href="https://github.com/Edxael" target="_blank">Edxael</a></div>
                <div><strong>Linkedin: </strong><a href="https://www.linkedin.com/in/edmundo-rubio-3252a425/" target="_blank">E. Rubio</a></div>
              </div>
            </div>

            <div style={profile}>
              <div>
                <div>
                  <img style={picSty} src={imgCJ} alt="Missing Picture"/>
                </div>
              </div>
              <div>
                <br/>
                <div><strong>Name: </strong>Curtins Jackson</div>
                <div><strong>GitHub: </strong><a href="https://github.com/Curtis50Jackson87" target="_blank">Curtis50Jackson87</a></div>
                <div><strong>Linkedin: </strong><a href="https://www.linkedin.com/in/curtis-jackson-670686143/" target="_blank">C. Jackson</a></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}



//                    Curtis:
// Linkedin:
// https://www.linkedin.com/in/curtis-jackson-670686143/
//
// GitHub:
// https://github.com/Curtis50Jackson87
