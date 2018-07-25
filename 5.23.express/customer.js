var express = require('express');

var router = express.Router();

//endpoint
router.get('/', function(req,res){
    res.send('listeado de clientes');
  });

  router.post('/', function(req,res){
    res.send('crear nuevo cliente');
  });

  module.exports = router;