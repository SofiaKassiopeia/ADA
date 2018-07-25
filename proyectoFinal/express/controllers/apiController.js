const apiServices = require('./../services/apiServices');
const self = {}


//la función es async
self.pegarApiBusquedas = async function(req,res,next){ //syntax error???
  let input = req.query.q;
//le ponemos el await para que espere a que se carguen las cosas, en vez de que siga con las promesase
  let productos = await apiServices.getItems(input);

  res.json(productos);   
}

self.pegarApiItemId = function(req,next){

  let id = req.params.id

  fetch('https://api.mercadolibre.com/items/{id​}/description')
     .then(response => {
       return response.json()
     })
     .then(data => {
       this.setState({ resultadoId: data}) //data--> trae el JSON de la API  (res.json)
     })
     .catch(err => {
       alert('pinchó los detalles')
     })
}

module.exports = self;