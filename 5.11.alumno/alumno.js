//alumno
class Alumno extends Persona{
	constructor(nombre, apellido, fecha, dni, legajo){

		super(nombre, apellido, fecha, dni);
		this._legajo = legajo;
		this._colegio;
		this._materias = []; //arreglo de objetos materia
	}

	set legajo(value){
		this._legajo = value;
	}

	get legajo(value){
		return this._legajo;
	}

	addMateria(materia){
		this._materias.push(materia);
	}

calcularPromedio(){

	let largo = this._materias.length;
	let total = 0;
	let i;

	for(i=0;i<largo;i++){

		total += this._materias[i].calcularPromedio();

	}
let promedio = total/largo;
return promedio;

}

// retorno el arreglo de materias del alumno

getMaterias(){
	return this._materia;
 }

}