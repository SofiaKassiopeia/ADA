import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SearchBar from './SearchBar.js';
import Body from './Body.js';
import Resultados from './Resultados.js';

class App extends Component {
  render() {
      return (
        <Router>
          <div>
             <Switch>
             <Route exact path="/" component={SearchBar} />
             <Route exact path="/items" component={Resultados}/>
             <Route exact path='/items/:id' component={Body} /> 
             </Switch>  
          </div>
        </Router>  
    );
  }
}
  
 
  
  export default App;
