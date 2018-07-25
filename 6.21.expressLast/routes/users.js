var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});
router.get('/form', function(req, res) {
  res.render ('form');
});


module.exports = router;

