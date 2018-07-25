import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Profile from './Profile.js';
import Skills from './Skills.js';
import Education from './Education.js';
import Repositories from './Repositories.js';


class App extends Component {
  render() {
    return (
      <div> <Header/> <Profile/> <Skills/> <Education/> <Repositories/> </div> 
    );
  }
}
  
 
  
  export default App;
