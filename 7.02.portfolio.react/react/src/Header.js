import React, { Component } from 'react';
import './Header.css';
import p1 from './fb.png';
import p2 from './g+.png';
import p3 from './github.png';
import p4 from './linked.png';
import p5 from './skype.png';
import p6 from './twitter.png';

class Header extends Component {
  render() {
    return (
      <div className="header"> <h1>MARK ZUCKERBERG</h1> <p>Soft ware engineer</p> 
      <div className="float">
      <div className="icons">
       <img className="icon" src={p1} alt=""/>
       <img className="icon" src={p2} alt=""/>
       <img className="icon" src={p3} alt=""/>
       <img className="icon" src={p4} alt=""/>
       <img className="icon" src={p5} alt=""/>
       <img className="icon" src={p6} alt=""/>
      </div>
      </div>
     </div>
    );
  }
}

export default Header;
