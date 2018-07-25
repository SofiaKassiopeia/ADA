var data = ["wolverine", "rogue", "ciclope"];

var mutante = {"nombre":" wolverine", //"atributo":" valor" y son objetos
               "comic":" x-men",
               "editora":"marvel",
               "peliculas":[" x-men","logan"]
  }

for (var i = 0; i<data.length;i++) {
	console.log(data[i]);
}

data.forEach(function(e){ //callback hace algo por cada elemento,, la funcion es el parametro del forEach,, e=elemento
	console.log(e);
});

/*
@params e | elemento del arreglo
@params indice | indice del elemento
*/

data.forEach(function(e,indice){
	console.log("El elemento: "+e+" esta en: "+indice)
});

data.forEach(function(e,indice,array){
	console.log("El elemento: "+e+" esta en: "+indice)
	console.log(array);
});

/* function mostrar(e){console.log(e);}

   data.forEach(mostrar);
   data.forEach(function(e){
	
   });

******LET y VAR******
*/

var valido = true; //Global

function validar(){

	 if(valido){console.log("todo piola");}
}

/* verifica validez valido local*/

function validar2(){

	let valido= true; // declaro una variable local

	if(valido){
		   console.log("todo piola");
	}
}