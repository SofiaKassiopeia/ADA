import React, { Component } from 'react';
import './css/Body.css';

class Body extends Component{

  constructor (props) {
   super(props);
//en el state es donde se guarda la informacion
   this.state = {
   		body: ' '
     
   };
  }

  render(){

  return (

    <div className="container-body">

  
      
    </div>
  
        
    );
  }
}

export default Body;