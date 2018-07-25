import React, { Component } from 'react';
import './css/SearchBar.css';
import './img/search.png'
import p1 from './img/play.png';
import p2 from './img/search.png';


class SearchBar extends Component{

  constructor (props) {
    super(props);
 //en el state es donde se guarda la informacion
    this.state = {
        search: ''
      
    };
   }
 
 //ACA LIMITO EL STATE DEL INPUT
 
   updateSearch(event){
     this.setState({search: event.target.value}); 
     //el target es el input y el value es el value (ver mas abajo)
   }
   //el onchange del boton es un update del state
 
   render(){
 
   return (
  
     <div id="form-busqueda" className="container-search">
 
       <header className="float">
       <img className="icon" src={p1} alt=""/>
       <h1>PLAYSTATION SHOP</h1> 
       <p>El mejor shop para los productos de Playstation en Argentina</p> 
         <form className="form" action='/items' >
         <input placeholder="buscar producto" name="search" type="text" id= 'input' value={this.state.search} onChange={this.updateSearch.bind(this)}/> 
         <input className="icon2" type="image" src={p2} border="0" alt="Submit" value= 'submit' />
         </form>
 
       </header>
 
     </div>
   
         
     );
   }
 }
export default SearchBar;