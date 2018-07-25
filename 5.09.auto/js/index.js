//ACA TRAIGO LOS VALORES DEL FORMULARIO

$('#ejes').hide();

$('#tipo').on('change', function(e){

let option = $(this).val();

if (option == 'CAMION'){

	$('#ejes').show();
}

});

$('#cargar').on('click', e=>{

	let vehiculo

    e.preventDefault();//evita el envio del form por GET
//son de los input
    let patente = $('#patente').val(); //recupero patente del form
    let modelo = $('#modelo').val();
    let color = $('#color').val();

   var tipoSelect = $('#tipo').val();

   switch(tipoSelect){

   	case 'AUTO': vehiculo = new Auto(patente, color, modelo); //creo un objeto Auto

   	break; 

   	case 'CAMION':let ejes = $('#ejes')
   	            vehiculo = new Camion(patente, color, modelo, ejes);
   	            vehiculo.acelerar(20);

   	break; 

   	case 'MOTO': vehiculo = new Moto(patente, color, modelo);

   }

     console.log(tipoSelect, vehiculo);
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