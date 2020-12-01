import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            
            <p> blank</p>

            <div className="banner-text">
              <h1>Alvin Motieram</h1>
              <h1>Learning Web Developer</h1>

            <hr/>

          <p>HTML/CSS | JavaScript | React </p>

        <div className="social-links">


          {/* Github */}
          <a href="https://github.com/AlvinMotieram" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Youtube */}
          <a href="https://www.youtube.com/channel/UCIHBIPape0dWHKANkivrcJw" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;