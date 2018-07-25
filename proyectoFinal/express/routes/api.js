var express = require('express');
var router = express.Router();

var apiController = require('../controllers/apiController')


/* GET users listing. */

router.get('/items', apiController.pegarApiBusquedas); 
//elementos que trae la api
//cuando le pego a esta API, devuelve 4 resultados de la búsqueda


router.get('/selected', apiController.pegarApiItemId);
//trae detalles del elemento clickeado 
//devuelvo el resultado del elemento seleccionado de la vista anterior
//hacer click → redireccion al 'detalle' del producto

module.exports = router;