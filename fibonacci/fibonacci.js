var cont=0;
var x=1;
var y=0;

for (var i=0; i<10; i++) {
	                      console.log(cont);
	                      y=cont;
	                      cont=cont+x;
	                      x=y;
}
i cont y x
0 0    0 0

// otra version

var numero=0;
var firstNum=-1;
var lastNum=1;

while(numero<11){
	             numero= firstNum + lastNum;
	             firstNum= lastNum;
	             lastNum= numero;

	             console.log(numero);
}

numero | numero < 11 | numero= firstNum+lastNum | firstNum
0          true             0= -1+1(0)