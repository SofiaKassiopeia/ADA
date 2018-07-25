class Checkout{
    constructor(descuentos="", cuotas="",envio="",subTotal="")

this._descuentos=descuentos;
this._cuotas=cuotas;
this._envio=envio;
this._precioTotal=precioTotal;

set descuentos(value){
    this._descuentos= value;
}
get descuentos(){
    return this._descuentos;
}

set cuotas(value){
    this._cuotas= value;
}
get cuotas(){
    return this._cuotas;
}

set envio(value){
    this._envio= value;
}
get envio(){
    return this._envio;
}

set subTotal(value){
    this._subTotal= value;
}
get subTotal(){
    return this._subTotal;
}

}

calcularDescuento(descuentos){
    if(subTotal>1000){
    let valor = this._subTotal*descuentos/100;
    return valor
    }
static calcularRecargo(subTotal,nroCoutas){
    let recargo = 0;
    switch(nroCoutas){
        case 3 recargo = subTotal*1.05
        break;
    }
    return recargo;
}

}
