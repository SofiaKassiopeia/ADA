/*Dada una variable y que puede contener un número de 1 a 7, determinar a que día de
la semana corresponde. Incluir la opción si la variable toma un valor no válido (por
ejemplo 0 u 8)*/

/*var num=["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
var dia= 2;

if (semana.indexOf(elemento)=indice) {}
*/
//----------------------------------------------------------------------------------------------------------------------

//generar funcion de login
// devuelva true en caso de logeo y falso en caso del contrario
/*
function login(usuario, password){

	if(usuario == "pepe" && password == 1234){
		return true;
	}else{
		  return false;
	}
}


function login(usuario, password){
	 
 var cantidad= 3;
 var valido = validar("pepa",1234);
 while(valido==false && cantidad <3){
	        console.log("usuario invalido");
            cantidad++;
            valido = validar("pepe",1234);
  }
  if(valido) {
	        console.log("Bienvenido");	                 
  }if(cantidad == 3 && !valido){
	 console.log("usuario bloqueado");
 }
}

/*if(login("fido",1234)) {
	                    console.log("Bienvenido");	                 
}else{
	 console.log("usuario invalido");
}*/

/*1. crear un array de usuarios y otras contraseñas, y validar (dos arrays)
2. funciones 3. Escribir una función que dada una palabra pasada por parámetro determine si es
aguda, grave o esdrújula
3. funciones 4. Escribir una función que dado un arreglo con los siguientes datos:
Corredor = { “Nombre”,”Apellido”,edad,”genero” } retorne la categoría a la cual estará anotado
por ejemplo:
F 18 – 25, M 18 – 25
*/

var usuario = ['Curt', 'Al', 'Anna', 'Garfield'];
var password =["password", 12345, "anna1", "irule!"]

function login(usuario, password){
if(usuario == "Curt" && password == "password"){
		return true;
	}else{
		  return false;
	}
}

function login(usuario, password){
if(usuario == "Al" && password == 12345){
		return true;
	}else{
		  return false;
	}
}

function login(usuario, password){
if(usuario == "Anna" && password == "anna1"){
		return true;
	}else{
		  return false;
	}
}

function login(usuario, password){
if(usuario == "Garfield" && password == "irule"){
		return true;
	}else{
		  return false;
	}
}
