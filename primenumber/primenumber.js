/* determinar si un numero es primo */

var num = 20;
var cont = 2;
var esPrimo = true;
 
 while ((cont > 1 && cont < num) && esPrimo == true){
 	                            resto = num%cont;
 	                            if (resto == 0) {
                                                  esPrimo = false;
 	                                            }
 	                            cont++;
                               }
 if (esPrimo==false) {
 console.log("no es primo");}
 else {
 	  console.log("es primo");}

