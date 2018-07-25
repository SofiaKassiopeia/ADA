var express = require('express');
var router = express.Router();

var books = [{
titulo: 'Harry Potter y la Piedra Filosofal',
isbn: '001',
src:'/images/hp1.jpg',
precio: '$425'} 
,
{titulo: 'Harry Potter y la Camara de los Secretos',
isbn: '002',
src:'/images/hp2.jpg',
precio: '$400'},

{titulo: 'Harry Potter y el Prisionero de Azkaban',
isbn: '003',
src:'/images/hp3.jpg',
precio: '$470'}];


router.get('/', function(req, res, next) {

  res.render('libros', { title2: 'Todos los libros', title1: 'Bienvenido Muggle!', listaDeBooks: books});
});


router.get('/isbn/:codigo', function(req, res, next) {
	for (var i = books.length - 1; i >= 0; i--) {

		if (books[i].isbn === req.params.codigo) {
			  res.render('isbn', { title2: 'Seleccionaste este libro:', title1: 'Bienvenido Muggle!', book: books[i]});
			  return;
		}
	}
	res.send(404)

});

//DELETE belen
/*
router.delete('/:isbn', function(req, res, next) {



  res.render()*/

  //delete con get belen



 router.get('/delete/:isbn', function(req, res, next) {

 	let isbn = req.params.isbn;

 	let libro = books.find(function(libro)
 		{return libro.isbn === isbn;})

 	books.splice(books.indexOf(libro),1) 
 	//books devuelve el objeto libro
 	//splice saca un elemento del arreglo

 	res.redirect('/libros')

 	//res.render('libros', { title2: 'Seleccionaste este libro:', title1: 'Bienvenido Muggle!',  book: books});
	
});


 router.post('/agregar', function(req,res,next){

 	
 });

  

function search(){

	for (var i = books.length - 1; i >= 0; i--) {

		if (books[i].isbn === req.params.codigo) {

			  res.render('isbn', { title2: 'Seleccionaste este libro:', title1: 'Bienvenido Muggle!', book: books[i]});
			  return;
		}
	}

}






module.exports = router;

 