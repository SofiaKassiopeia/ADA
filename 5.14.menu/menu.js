class Menu{

    construct(entrada,principal,postre,bebida){

        this._entrada = entrada;
        this._principal = principal;
        this._postre = postre;
        this._bebida = bebida;
        this._precio = 180;

    }

    set entrada(value){
        this._entrada= value;
    }
    get entrada(){
        return this._entrada;
    }
    set principal(value){
        this._principal= value;
    }
    get principal(){
        return this._principal;
    }
    set postre(value){
        this._postre= value;
    }
    get postre(){
        return this._postre;
    }
    set bebida(value){
        this._bebida= value;
    }
    get bebida(){
        return this._bebida;
    }
     

}

/*2.
menu

-entrada
-plato principal
-postre 
-bebida
-precio

las 3 clases: 
plato
-nombre  
-tipo(entrada, plato) 
-vegano, vegetariano, celiaco

postre (extends plato)
-calorias

bebida
-alcohol
-nombre
*/