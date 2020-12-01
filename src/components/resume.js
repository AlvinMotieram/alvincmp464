import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Alvin Motieram</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>21 year old living in the Bronx. Hard working student trying to become a better coder. </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Phone</h5>
            <p>(347) 344-2558</p>
            <h5>Email</h5>
            <p>alvin.motieram@lc.cuny.edu</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2013}
              endYear={2017}
              schoolName="St Raymonds High School"
              schoolDescription="Private School located in Parkchester of the Bronx."
               />

               <Education
                 startYear={2017}
                 endYear={2021}
                 schoolName="Lehman College"
                 schoolDescription="CUNY located in the Bronx."
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2017}
              endYear={2018}
              jobName="Toyota"
              jobDescription="Got cars ready that were being sold."
              />

              
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="React"
                progress={50}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={20}
                  />
                    
                <Skills
                      skill="Javascript"
                      progress={50}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;