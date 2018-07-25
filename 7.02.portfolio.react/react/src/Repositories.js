import React, { Component } from 'react';
import './Repositories.css';

class Repositories extends Component {
    render() {
    return (  
    <div className="container">
       <h1 className="Repositories">REPOSITORIES</h1>       
       <div className="boxRepositories">
           <p className="greenTitle">Juego Rompecabezas</p>
           <p className="textRepo">url</p>
           <p className="textRepo">12.04.2018</p>
      </div>
      <div className="boxRepositories num3">
           <p className="greenTitle">Proyecto Express</p>
           <p className="textRepo">url</p>
           <p className="textRepo">04.05.2018</p>
      </div>
      <div className="boxRepositories">
           <p className="greenTitle">Proyecto otro</p>
           <p className="textRepo">url</p>
           <p className="textRepo">07.03.2018</p>
      </div>
      <div className="boxRepositories num2">
           <p className="greenTitle">Proyecto Bloop</p>
           <p className="textRepo">url</p>
           <p className="textRepo">14.11.2018</p>
      </div>
    </div>
  );
 }
}

    export default Repositories;

