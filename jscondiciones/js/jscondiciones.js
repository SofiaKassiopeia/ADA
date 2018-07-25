/*dado un monto total, calcular valor de descuento que se aplicara y el monto total a pagar

si el monto es menor a 500 no se realizan descuentos*/

x=400;
var pagoTargeta = false;
var cuotas = 0;

if (x<500) {

console.log("valor de descuento:0" + "monto:" +x);

}


/*monto entre 501 y 1000: 10% descuento*/

if ((x>=501) && (x<=1000)) {
    
    console.log("valor de descuento:"+ 0.1*x +
    	         "monto:" +x-0.1*x );
    }

/* or:
else if (x<=1000) {
    
    console.log("valor de descuento:" 0.1*x
    	         "monto:" x-0.1*x );
    } because if x doesnt fit into the first category it will ask for the 2nd 1 and if that applies 
      then the discount applies*/

if ((x>1000) && (x<=1500)){
	console.log("valor de descuento:"+ 0.15*x +
    	         "monto:"+ x-0.15*x);
}

else{
	console.log("valor de descuento:"+0.2*x +
	             "monto:" +x-0.2*x);		 	                                   
} /* idk if that works or not
     it might apply to all numbers, even those who are under or equal 1500
     so i guess you have to put (x>1500) in else*/

if (pagoTargeta==true) {var recargo = 0 
	if(cuotas == 3) { recargo= 0.05; }

if(cuotas == 6) { recargo= 0.1; }

monto = monto + recargo + monto;
console.log(cuotas +"total con recarga")

switch(cuotas) {
                case 1:
                case 2:
                case 3: recargo= 0.05; break; /*cada uno de esos valores es unico hay que ponerlo */
                case 6: recargo= 0.1; break;
                default: recargo= 0; break;
}
}