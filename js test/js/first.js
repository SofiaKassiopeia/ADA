/*x= "19"
y= 19

if (x==y) {console.log ("son iguales");}

if (x===y) {console.log ("son equivalentes");}
      else{console.log ("no son equivalentes");}*/


/* Tomar dos variables, si ambas son mayores de 10, entonces lo sumo, si no los multiplico*/

x=10;
y=10;
/*suma*/ z=0;

if (x>10 && y>10) {

	z=x+y
	/*Ejecuto la suma, solo si ambas variables cumplen*/
}

else{ z=x*y;
     /*ejecuta si al menos una es menor que 10*/
    }


console.log("El resultado es:" +z);

if (x>10 || y>10) {

	z=x+y
	/*Ejecuto la suma, si una de las variables cumple*/
}

else{ z=x*y;
     /*ejecuta si una es menor que 10*/
    }
    
console.log("El resultado es:" +z);

/* Mostrar mendaje de bienvenida inclueyendo nombre y apellido.
   Solo si coinciden con los valores "Sofia" y "Kuehne"*/

nombre= "Sofia";
apellido= "Kuehne";
bienvenida= " "; 
console.log(bienvenida);

if (nombre== "Sofia" && apellido== "Kuehne") {

	bienvenida = "Bienvenida a ADA " + "nombre" + "," + " apellido"
	console.log(bienvenida);
}

console.log(bienvenida);
bienvenida=" "; /*aqui se limpia todo otra vez y no aparece nada en la consola*/

















