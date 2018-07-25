import React, { Component } from 'react';
import './Education.css';

class Education extends Component {
    render() {
    return ( 
    <div className="container">
    <h1 className="Repositories">EDUCATION</h1>       
    <div className="boxRepositories">
        <p className="greenTitle">BS in Computer Science</p>
        <p className="textRepo">HARVARD UNIVERSITY</p>
        <div className="divEdu">2008-2012</div>
   </div>
   <div className="boxRepositories num3">
        <p className="greenTitle">MS in Computer Science</p>
        <p className="textRepo">HARVARD UNIVERSITY</p>
        <div className="divEdu">2012-2014</div>
   </div>
    <div className="boxRepositories">
        <p className="greenTitle">Certification in Machine Learning</p>
        <p className="textRepo">BEST INSTITUTE</p>
        <div className="divEdu">2014-2017</div>
   </div>
   <div className="boxRepositories num2">
        <p className="greenTitle">Certification in Data Analysis</p>
        <p className="textRepo">INSTITUTE OF COOLNESS</p>
        <div className="divEdu">2017-2018</div>
   </div>
 </div> );
    }
    }

    export default Education;
