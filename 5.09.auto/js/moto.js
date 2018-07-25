class Moto{

    /*CONSTRUCTOR estamos definiendo la funcion y los parametros que vamos a pasar
    qué atributos cargo
        *
        *
        *
    */

    constructor(patente="" , modelo="", color=""){

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

}
