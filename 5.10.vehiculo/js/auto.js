//en este documento guardo las clases, en el index las ejecuto
//defino el constructor de Auto

//auto:
/**patente, marca, modelo, color // ya no es necesario **/ //cantPuerta
/***acelerar(), frenar(), doblar() // ya no es necesario ***/

//camion:
/***patente, marca, modelo, color // ya no es necesario ***/ //cantidadEjes, tara
/***acelerar(), frenar(), doblar() // ya no es necesario ***/ //acoplar()

//vehiculo:
//herencia: crear otra clase (padre) para las 2 clase por la cosas que tienen en comum

//patente, marca, modelo, color
//acelerar(), frenar(), doblar()



class Auto{

    /*CONSTRUCTOR estamos definiendo la funcion y los parametros que vamos a pasar
    qué atributos cargo
        *
        *
        *
    */

    constructor(cantPuerta=" "){

        this._cantPuerta = cantPuerta;

    }
    //SETTERS Y GETTERS

    set cantPuerta(value){
        this._cantPuerta= value; // _ para evitar referencias circulares, no acceder directamente al 
                                 //atributo, no puede ser igual al metodo, solo con metodo magico
    }
    get cantPuerta(){
        return this._cantPuerta; //_patente: atributo
    }
}
