/* Todos los inputs son obligatorios */

function validar(e){

	e.preventDefault();

	var nombre = $('#nombre').val();
	var apel = $('#apel').val();
	var mail = $('#mail').val();

	console.log(nombre);
// Version 1

/* Si un campo vacio formulario invalido */

	/*if(nombre.length != 0 && apel.length != 0 && mail.length != 0){
		return true;
	}*/

// Version 2

	if(nombre.length == 0 || apel.length == 0 || mail.length == 0){
		
		let errores = $('.errores');
		$("#nombre").focus(); //focos te resalta el input (es una funcion)
		$("#nombre").css("border","red"); //para agregar clase
		$("#nombre").addClass("error"); //agregar clase de error

/*		$.each(errores,function(indice,elemento){

			elemento.textContent = "Campo obligatorio";
			console.log(elemento);

	});*/

		return false;	
	}

/* Version 1 
	var pelis = Array.from($('.genero'));

	pelis.forEach(function(elemento,indice){

		if(elemento.checked){
			console.log("Elegiste esta opcion");
		}

	});

/* Version 2 */

	var pelis = $('.genero');

	$.each(pelis,function(indice,elemento){

		console.log(elemento);

		if(elemento.checked == true){
			console.log("Elegiste esta peli");
		}
	});

	return true;

}

$('#alquilar').on('click',function(e){
	if(validar(e)){
		console.log($())
		$("#alquiler").submit();
		alert("formulario enviado");
	}
});

$("#limpiar").on("click",function(e){
	console.log("borre formulario");
	$("#errores").html("");
});

/*
function(e){


	var nombre = $('#nombre').val();

	console.log(nombre);

	

	
});

*/

