class Plato extends Postre{

    constructor(nombre, tipo, dieta, calorias){

    super(nombre, tipo, dieta)
    this._calorias = calorias;

    }
    set calorias(value){
        this._calorias= value;
    }
    get calorias(){
        return this._calorias;
    }
}

