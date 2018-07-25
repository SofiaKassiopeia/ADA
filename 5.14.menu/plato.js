class Plato{

    constructor(nombre, tipo, dieta){

        this._nombre = nombre;
        this._tipo = tipo;
        this._dieta = dieta;
    }

set nombre(value){
    this._nombre= value;
}
get nombre(){
    return this._nombre;
}

set tipo(value){
    this._tipo= value;
}
get tipo(){
    return this._tipo;
}

set dieta(value){
    this._dieta= value;
}
get dieta(){
    return this._dieta;
}

}