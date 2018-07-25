var express = require('express');
var router = express.Router();

var nenas = ['Hannah', 'Namerino', 'Blake', 'Girl', 'Sahra'];
var nenes = ['George', 'Boy', 'ReEeeE', 'Bro', 'Dude'];

var mixtos = nenas.concat(nenes);

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

/* GET users listing. */
//sin parámetros
// router.get('/', function(req, res, next) {
//   res.render('nombres', {nombres: shuffle(mixtos), color: 'amarillo'})
// });

// router.get('/nena', function(req, res, next) {
// 	res.render('nombres', {nombres: shuffle(nenas), color: 'rosa'});
// })

// router.get('/nene', function(req, res, next) {
// 	res.render('nombres', {nombres: shuffle(nenes), color: 'celeste'});
// })

//con parámetros
router.get('/:genero', function(req, res, next) {
	let genero = req.params.genero;
	switch (genero) {
		case 'nena':
			let nombres = shuffle(nenas);
			let color = 'rosa';
			break;

		case 'nene':
			nombres = shuffle(nenes);
			color = 'celeste';
			break;

		default:
			nombres = shuffle(mixtos);
			color = 'amarillo';
			break;
	}

	res.render('nombres', {nombres: nombres, color: color});
})


module.exports = router;