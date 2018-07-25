class Auto {

    /*CONSTRUCTOR estamos definiendo la funcion y los parametros que vamos a pasar
    qué atributos cargo
        *
        *patente, marca, modelo, color
        *acelerar(), frenar(), doblar()
        *
    */

    constructor(patente="", modelo="", color="", marca=""){

        this._patente = patente;
        this._modelo = modelo;
        this._color=color;
        this._marca=marca;

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


    set marca(value){
        this._modelo= value;
    }
    get marca(){
        return this._modelo;
    }


    set marca(value){
        this._marca= value;
    }
    get marca(){
        return this._marca;
    }


    get velocidad(){
            return this._velocidad;
        }

     acelerar(aceleracion){
        this._velocidad+=aceleracion;
     }

     frenar(){
        this._velocidad = 0;
     }

     doblar(){
        return this._doblar;
     }

}
