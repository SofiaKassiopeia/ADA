/*Dados tres números, x y z, si x es mayor que y calcular la resta entre x y z, y determinar
si eso es mayor que y, de lo contrario sumar x y z (x+z) y multiplicarlo por y.*/

x=4;
y=5;
z=2;
w= x-y;

if (x>y) {
	      w=x-y
	      console.log("w es la resta:" +w );
}
else{x<y
    console.log("y es mayor que x")
  }

if (w>y) {
	       console.log( "w es mayor que y" +w);
}

else{
	 r=(x+z)*y;
	 console.log("w es menor que y" +r)
}

/*El producto X que se desea canjear tiene un valor determinado en cantidad de puntos.
Si el cliente que lo quiere canjear tiene la cantidad de puntos requerida realiza
directamente el canje.
Si el cliente tiene el 50% de los puntos requeridos, podrá completar el canje con dinero,
en ese caso cada peso equivaldrá a 3 puntos.
Si el cliente tiene el 50% de los puntos requeridos, pero a su vez tiene categoría
premium, la relación pesos puntos será 1 a 5.*/

var puntosProducto= 50;
var puntosNecesarios= 100;
var premium= false;


if (puntosProducto>=puntosNecesarios) {
	                             console.log("canje realizado")};

if (puntosProducto<=0.5*puntosNecesarios) {
	                                var m= 0.5*puntosProdcto*3
	                                console.log("con 50% completas con:" +m +"pesos");
	                                else if (premium) {
	                                	m= 0.5*puntosProdcto*5
	                                	console.log("con 50% completas con:" +m +"pesos por tener categoría premium")};
	                            };



