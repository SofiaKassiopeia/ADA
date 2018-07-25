import React, { Component } from 'react';
import './css/Resultados.css';

class Resultados extends Component {
//aca cargo el contenido del fetch y modifica el state
constructor (props) {
  super(props);

   //en el state es donde se guarda la informacion
  this.state = {
      losProductosQueMeDevolvioLaApi: []
     //el resultado de busqueda es un objeto en el cual sale lo que MELI dice que tiene {los cuatro objetos}
    
  };

 }

 componentDidMount () {
   //llamar a la ruta que esta en el app.js y al controller, y ahi la ruta al componente.)
   //router.get('/', apiController.pegarApiBusquedas) 

   // this.props.location.search es un string con lo que tengo después del ? en la barra de direcciones
   // por ejemplo: ?search=celular+moto+g
   const params = new URLSearchParams(this.props.location.search); 
   const elInputQueIngresoElUsuario = params.get('search');

  fetch('/items?q=' + elInputQueIngresoElUsuario)
    .then(response => {
      return response.json()
    })
    .then(data => {
      this.setState({ losProductosQueMeDevolvioLaApi: data.items }) 
    })
    .catch(err => {
      console.log(err)
      alert('pinchó, no trae nada.')
    })
}

 render(){

   //recorro la api
 var devuelve = this.state.losProductosQueMeDevolvioLaApi.map(r=>{
   return <div>{r.title}</div>
 });

 return (

   <div className="container-search">

         {devuelve}
     
   </div>
 
       
   );
 }
}
 export default Resultados;