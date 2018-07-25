/*class Auto{

	//constructor

	Auto(patente=""){

		this._patente=patente;
	}
	//setters and getters

	set patente(value){
		this._patente = value;
	}

	get patente(){
	return this._patente
 }

    getPatente(){
    	return this._patente;
    }

*/


//en este documento guardo las clases, en el index las ejecuto
//defino el constructor de Auto


declaracion en index.js: class claseHija extends clasePadre
                   here: class Auto extends Vehiculo{
                   .
                   .
                   .
                   }
class Auto{

    /*CONSTRUCTOR estamos definiendo la funcion y los parametros que vamos a pasar
    qué atributos cargo
        *
        *
        *
    */

    constructor(patente=" ", modelo=" ", color=" "){

        this._patente = patente;
        this._modelo = modelo;
        this._color=color;

    }
    //SETTERS Y GETTERS

    set patente(value){
        this._patente= value; // _ para evitar referencias circulares, no acceder directamente al atributo, no puede ser igual al metodo, solo con metodo magico
    }
    get patente(){
        return this._patente; //_patente: atributo
    }



    set color(value){
        this._color= value;
    }
    get color(){
        return this._color;
    }



    set modelo(value){
        this._modelo= value;
    }
    get modelo(){
        return this._modelo;
    }
}
