var arrArboles = [
    "img/0.jpg",
    "img/1.png",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.jpg",
    "img/0.jpg",
    "img/1.png",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.jpg"
];

var primerImagen = {
    'imagen': null,
    'id': ''
};

function voltarCartas() {
    let backImg = "img/map.png";
    $('img').attr("src", backImg);
}

function verCarta() {
    var id = $(this).attr("id");
    $(this).find(':first-child').attr("src", arrArboles[id]);
    
  //show
        chequearCartas(id);
}

function darVuelta(segundaImagen) {
    let backImg = "img/map.png";
    $("#" + primerImagen.id).find(':first-child').attr("src", backImg); //vuelta 1er imagen
    $("#" + segundaImagen).find(':first-child').attr("src", backImg); //vuelta 2da imagen

    primerImagen.imagen = null;
    primerImagen.id = null;
}

function chequearCartas(id) {
    //    let id = $(this).attr("id"); //En cada scope guardo el id del figure para comparar
    console.log("chequearCartas + id = " + id);

    if (primerImagen.imagen == null) { //si no tengo nada guardado como 1era imagen,
        primerImagen.imagen = arrArboles[id]; //pongo src en objeto primerImagen.imagen el numero de index que corresponde con el id del figure
        primerImagen.id = id; //me guardo el id del figure en primerImagen.
    } else {
        if (primerImagen.imagen == arrArboles[id] && //Si el src guardada en primerImagen es igual al numero de index
            primerImagen.id != id) { //comparo el nuevo id de la segunda imagen con el guardado en primera imagen
            
            
            $(this).off(); //quito el evento a la segunda imagen
            $("#" + primerImagen.id).off(); //quito evento ;1era imagen
            
            alert("SON IGUALES");

            primerImagen.imagen = null;
            primerImagen.id = null;
        } else {
            let segundaImagen = id;
            darVuelta(segundaImagen);
        }

    }
}

/*
 *       mezcla el contenido de un array
 *        @param array  -  return array
 */
function mezclarArray(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
$('figure').on('click', verCarta);


mezclarArray(arrArboles);
voltarCartas();