import React, { Component } from 'react';
import './Skills.css';

class Skills extends Component {

    state = {skills:[]}   

    componentDidMount() {
        fetch('/api/skills')
          .then(res => res.json())
          .then(skills => this.setState({ skills }));
      }

    render() {
        console.log(this.state.skills);
    return (
   <div>
   <h1 className="skills">SKILLS</h1>
   <div className="boxSkills">
    <div className="text textSkills">
      <p className="written">{this.state.skills.map(skills =>
          <div key={skills.id}>{skills.username}</div>
        )}</p>
   </div>
   <div className="right">
          <div className="infoSkills">
              <p className="ps2">Front-End Developement</p>
              <p className="ps2">Back-End Developement</p>
              <p className="ps2">Mobile App Developement</p>
              <p className="ps2">Desktop Developement</p>
          </div>
          <div className="info2Skills">
              <p className="ps2">90%</p>
              <p className="ps2">85%</p>
              <p className="ps2">75%</p>
              <p className="ps2">80%</p>
          </div>
          <div className="bars">
          <hr className="bar a"></hr>
          <hr className="bar b"></hr>
          <hr className="bar c"></hr>
          <hr className="bar d"></hr>
          </div>
      </div>
   </div>
  </div>
  );
 }
}

    export default Skills;
