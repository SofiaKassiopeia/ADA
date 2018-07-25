import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
   
    let frutas = ['Anana', 'Banana', 'Kiwi'];
       
    return (
        <ul>
            {frutas.map(function(value, index){
                return <li key={ index }>{value}</li>;
              })}
        </ul>
      );
  }
}

export default App;
