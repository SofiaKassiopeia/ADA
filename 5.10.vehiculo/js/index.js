//ACA TRAIGO LOS VALORES DEL FORMULARIO

$('#montoEjes').hide();
$('#tara').hide();

$('#tipo').on('change', function(e){

let option = $(this).val();

if(option == 'CAMION'){

	$('#cantPuerta').show();
  $('#tara').show();
}

});



$('#cantPuerta').hide();

$('#tipo').on('change', function(e){

let option = $(this).val();

if(option == 'AUTO'){

  $('#cantPuerta').show();
}

});

$('#cargar').on('click', e=>{

	let vehiculos

    e.preventDefault();//evita el envio del form por GET
//son de los input
    let patente = $('#patente').val(); //recupero patente del form
    let modelo = $('#modelo').val();
    let color = $('#color').val();


   var tipoSelect = $('#tipo').val();

   switch(tipoSelect){

   	case 'AUTO':let cantPuerta = $('#cantPuerta') 
                vehiculos = new Auto(cantPuerta)/*,new Vehiculo(patente, marca, modelo, color)*/; 

   	break; 

   	case 'CAMION':let montoEjes = $('#montoEjes')
                  let tara = $('#tara')
   	              vehiculos = new Camion(montoEjes, tara) /*,new Vehiculo(patente, marca, modelo, color)*/;
   	              //vehiculo.acelerar(20);

//class clasellita extends clasePadre: classAuto extends Vehiculo 
   }

     console.log(tipoSelect, vehiculos);
     //muestro el objeto completo

});    

    // console.log(auto.patente); //muestro el atributo patente


//SELECT

/*


function selected(tipoSelect){

    if(tipoSelect == MOTO){
        console.log(‘Seleccionaste Moto’);
    }else if(tipoSelect==AUTO){
        console.log(‘Seleccionaste un Auto’);
    }else{
        console.log(‘Seleccionaste un Camion’);
    }

}
console.log(selected);
*/