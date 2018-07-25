/*funcion iterationsToEquality(array of numbers)
return numbers
minima cantidad de iteraciones para lograr igualar el valor de todos los numeros del array
sumar 1 a cada elemento del array, excepto el valor mas alto del array (por cada iteracion)

var numbers = [1, 3, 3];

function(iterationsToEquality){

var max = Math.max(...numbers);
console.log(max);

}
*/

/*
array 1 to 15
switch
case 1 vielfach 3
CASE 2 Vielfach von 5 
case vielfach von 3 und 5
default: stays the same




function fooBar(num){
    let array = [];
    for (var i = 1; i<=num; i++){
        if(i%3===15){
            array.push('fooBar')
        }else if(i%3===0){
            array.push('foo')
        }else if(i%5===0){
            array.push('bar')
         }else{
             array.push(i)
         }
        }return array
    } 
console.log(fooBar(30))
___________________________________________
alternative: 

for (var i = 1; i<=num; i++){
    if(i%3===0){
        numeros[i]='foo'
    }
   if(i%5===0){
    numeros[i] = (numeros[i] || "" + "bar")
    }
}
___________________________________________
for (var i = 1; i<=num; i++){
   return.array.map(n =>{
       if (n%3===0) return 'Foo'
       if (n%5===0) return 'Bar'
       if (n%15===0) return 'FooBar'
       return n
   });
}


var array = ['ababaa', 'babaa', 'abaa', 'baa', 'aa', 'a'];

function comparar(){
    for()
}
__________________________________________________________

function palindrome(palindromoQuizas){

let mayusculas = palindromoQuizas.toUpperCase(); //quito espacios
console.log("palindrome.toUpperCase : "+mayusculas);

var letters = /[a-z]/gi; //g: busca todos los match a: no importa mayuscula o minuscula
var letrasSueltas = mayusculas.match(letters);
if (letrasSueltas) {
console.log("cantidad de letras"+letrasSueltas.length);
}
var stringDerecho = letrasSueltas.join();
console.log("palindrome.letters : "+c);

var letrasSueltasReves = letrasSueltas.reverse();
console.log("palindrome.reverse : "+letrasSueltasReves);
var stringReves = letrasSueltasReves.join();

if(stringReves===stringDerecho){
    console.log("c'est un palindrome");
    return true;
}else{
    console.log("ce n'est pas un palindrome");
    return false;
}
}

palindrome("amar da dlalarama");
_________________________________________________________

function sum(a,b = 0){
    if (b){
        return a + b
    }else{
        return function(b){
            return a + b;
        }
    }
}

console.log(sum(2,3)) //5
var add2 = sum(2)
console.log(add2(3)) //5
____________________________________________________________

var array = [4,11,4,534,56,3,2,1,9];

array.sort((a,b) =>{
    if (a<b) return -1
    if (a>b) return 1
    return 0
})
console.log(array)
____________________________________________________________

var array = [4,11,4,534,56,3,2,1,9];

function burbujeo(){
   for(var i = 0; i < num.length; i++){
    for(var k = 0; k < num.length; k++){
    if(array[k]>array[k+1]){
        var mayor = array[k];
       array[k] == array[k+1];
       array[k+1] = mayor;
       console.log("menor = " + array[k] + "mayor = " + array[k+1]);

    }else{
        console.log("menor = " + array[k] + "mayor = " +array[k+1]);
    }
  }n--
  console.log(array);
 }
}
function burbujeo();

______________________________
*/
function burbujeo(numerosMezclados) {

   var n = numerosMezclados.length;
   
   for (var i = 0; i < numerosMezclados.length; i++) {
       for (var z = 0; z < n; z++) {

           if (numerosMezclados[z] > numerosMezclados[z + 1]) {
               var mayor = numerosMezclados[z];
               numerosMezclados[z] = numerosMezclados[z + 1];
               numerosMezclados[z + 1] = mayor;

               console.log("menor = " + numerosMezclados[z] + "mayor = " + numerosMezclados[z + 1]);
           } else {
               console.log("menor = " + numerosMezclados[z] + "mayor = " + numerosMezclados[z + 1]);
           }
       }
       n--;

       console.log("numerosMezclados =" + numerosMezclados);

   }
}

let array = [1, 8, 7, 14, 5, 6, 3, 9, 2];

burbujeo(array);
