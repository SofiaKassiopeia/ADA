var express = require('express');
var router = express.Router();

var personas = [
	{ dni: '33333333', nombre : 'Jaime Suarez', edad : 25, gs : 'A+', alergias: 'no posee'},
	{ dni: '44444444', nombre : 'Juana Pérez', edad : 30, gs : 'O+', alergias: 'penicilina'},
	{ dni: '55555555', nombre : 'Ringo Starr', edad : 40, gs : 'RH+', alergias: 'maní'}
]

var dniValido = /\d{7,8}/; //entre 7 y 8 dígitos

router.get('/', function(req, res) {
	res.render('users', {error: 'Ingrese un DNI luego de la URL'})
})

router.get('/:dni', function(req, res) {
	let dni = req.params.dni;
	if (dniValido.test(dni)) { // si el parámetro es un DNI válido
		// res.render('users', {status: 'dni valido'}) // test
		let persona = personas.find(function(persona) {
			return persona.dni == dni.toString();
		})

		if (!persona) { //la persona no existe
			res.status(404);
			res.render('users', {error: "no se encontró el paciente"})
		}

		else { //la persona existe
			res.render('users', {data: persona})
		}
		
	}

	else {
		//dni no válido
		res.status(500);
		res.render('users', {error: 'Entrada no válida'})
	}	
})

module.exports = router;
