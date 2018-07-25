
var booksExtra = {
				titulo:'' ,
				isbn: '',
				src:'',
				precio: ''};

 function agregarBook(){

 }
//AJAX

$('#upload').on('click', function(){
	$.ajax({
		method:"POST",//pusheamos los datos
		url: "http://localhost:3000/libros/agregar",

}) 

	//SOFI K DICE ALGO CON LOCAL STORAGE

	.done(function(response){
	
	//QUE QUEREMOS QUE HAGA LA FUNCION? QUEREMOS QUE LOS DATOS SE POSTEEN DEL PUG . 

       



		//aca va el codigo para mostrar los resultados
	});
});