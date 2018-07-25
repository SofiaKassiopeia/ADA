//materia

class Materia{

	constructor(nombre, horarios){

		this._nombre = nombre;
		this._horarios = horarios;
		this._notas = [];
	}

 set nombre(value){

 this._nombre
 }
addNota(nota){

	this._nota
}

calcularPromedio(){

	let largo = this._materias.length;
	let total = 0;

	for(i=0;i<largo;i++){

		total += this._notas[i];

	}
let promedio = total/largo;
return promedio;

}

}