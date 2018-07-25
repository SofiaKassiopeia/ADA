class Camion{

    /*CONSTRUCTOR estamos definiendo la funcion y los parametros que vamos a pasar
    qué atributos cargo
        *
        *
        *
    */

    constructor(montoEjes=" ", tara=""){

        this._montoEjes = montoEjes;
        this._tara = tara;

    }
    //SETTERS Y GETTERS

    set montoEjes(value){
        this._montoEjes= value;
    }
    get montoEjes(){
        return this._montoEjes;
    }

    set tara(value){
        this._tara= value;
    }
    get tara(){
        return this._tara;
    }

/*
velocidad: get, set <-- value , frenar() --> velocidad=0, acelerar(a) --> velocidadNueva
*/

    get acoplar(){
            return this._acoplar;
    }

}