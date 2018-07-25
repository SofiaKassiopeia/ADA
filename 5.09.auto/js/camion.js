class Camion{

    /*CONSTRUCTOR estamos definiendo la funcion y los parametros que vamos a pasar
    qué atributos cargo
        *
        *
        *
    */

    constructor(patente=" ", modelo=" ", color=" ", ejes=" "){

        this._patente = patente;
        this._modelo = modelo;
        this._color=color;

    }
    //SETTERS Y GETTERS

    set patente(value){
        this._patente= value;
    }
    get patente(){
        return this._patente;
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

set ejes(value){
        this._patente= value;
    }
    get ejes(){
        return this._patente;
    }
/*
velocidad: get, set <-- value , frenar() --> velocidad=0, acelerar(a) --> velocidadNueva
*/
get velocidad(){
        return this._velocidad;
    }

 acelerar(aceleracion){

        this._velocidad+=aceleracion;

 }

 frenar(){
    this._velocidad = 0;
 }

}