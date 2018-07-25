const fetch = require('node-fetch');

const self = {};

//var resultDeBusqueda =[
//
 //			{author: {name: Sofia,
//				   lastname: Suvercase
 //					   	},
// 			categories: [String, String, String],
// 			items: [{"id": String,
// 					 "title": String,
// 					 "price": {"currency": String,
// 					 		   "amount": Number,
// 					 		   "decimals": Number},
// 			picture: String,
// 			"condition": String,
// 			"free_shipping": Boolean},
			
// ]}
//]

//var description = [
	// {
	// 			author: {
	// 					name: String,
	// 					lastname: String },
	// 			item: {
	// 					"id": String,	
	// 					"title": String, 
	// 					"price": {
	// 								"currency": String,
	// 								"amount": Number,
	// 								"decimals": Number,
	// 					},
	// 			picture: String,
	// 			condition: String,
	// 			free_shipping: Boolean,
	// 			sold_quantity:Number,
	// 			description: String,
				
	// 	}
	// }
//]

self.getItems = function(input){

	let resultadoBusqueda = {};

	return fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}&limit=4`)
     .then(response => {
       return response.json()
     })
     .then(data => {
		const productos = data.results

	  //res.json({ resultadoBusqueda: data}) //data--> trae el JSON de la API  (res.json) no hace falta aca
		resultadoBusqueda = {
				author: {name: 'Sofia',
						lastname: 'Suvercase'
						},
				items: productos.map(function (p) {
					let newProduct = {
						"id": p.id,
						"title": p.title,
					    "price": {"currency": String,
							      "amount": Number,
							      "decimals": Number},
					// picture: String,
					// "condition": String,
					// "free_shipping": Boolean
					}
					return newProduct
				})
		}

		return resultadoBusqueda;
     })
     .catch(err => {
       console.log('pincharon las busquedas')
     })



}

module.exports = self