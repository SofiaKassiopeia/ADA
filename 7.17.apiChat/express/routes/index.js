var express = require('express');
var router = express.Router();
var userController = require('./controllers/userController');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/*login user */
router.post('/login', function(req, res, next) {

  let user = req.body.user;
  let pass = req.body.pass;

  userController.login(user,pass, res);

})

router.post('/login', userController.login);
router.post('/registrar', userController.registrar);

//administrar amigos
router.get('/agregarAmigo/:token/:name', userController.agregarAmigo);
router.get('/quitarAmigo/:token/:token', userController.quitarAmigo);

//

module.exports = router;
