class pero{
	/* plan a*/

	constructor (x="", y=""){
	this._nombre=x;
	this._raza=y;
	this._edad=2;
	this._castrado=false;
	}

//debe definirse el constructor o con la palabra constructor
// o utilizando el mismo nombre de la clase



set nombre(value){
	this._nombre=value;

}

toString() {
	return this._nombre +','+this._raza;
  }
}

//creacion de objetos
let p1=new Perro("Fido","Bull terrier");
let p3=new Perro();

let salida = p1.toString();

console.log(salida);