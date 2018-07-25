import React, { Component } from 'react';
import './Profile.css';
import Picture from './zuck.jpg';
import p1 from './fb.png';
import p2 from './g+.png';
import p3 from './github.png';
import p4 from './linked.png';
import p5 from './skype.png';
import p6 from './twitter.png';


class Profile extends Component {
    render() {
    return ( 
    <div className="box">
      <img className="img" src={Picture} alt=""/> 
      <div className="text">
        <h1 className="name">I'M MARK ZUCKERBERG</h1>
        <br></br>
        <p className="description">Founder of Facebook & Lizard King</p>
         <hr className="hr"></hr>
            <div className="info">
                <p className="ps">Age</p>
                <p className="ps">Address</p>
                <p className="ps">Email</p>
                <p className="ps">Phone</p>
                <p className="ps">Website</p>
            </div>
            <div className="info2">
                <p className="ps">34</p>
                <p className="ps">Dazuck Str. 343, PA, California</p>
                <p className="ps">notanalien@fb.com</p>
                <p className="ps">+12 03047691725</p>
                <p className="ps">markzuckerberg.com</p>
            </div>
           <div className="green">
           <div className="icons2">
            <img className="icon" src={p1} alt=""/>
            <img className="icon" src={p2} alt=""/>
            <img className="icon" src={p3} alt=""/>
            <img className="icon" src={p4} alt=""/>
            <img className="icon" src={p5} alt=""/>
            <img className="icon" src={p6} alt=""/>
           </div>
           </div>
       </div> 
     </div>
     
);
  
    }
    }

    export default Profile;
