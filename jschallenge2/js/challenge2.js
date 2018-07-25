
   /*** Variables globales **/
var ciudades = [
        {
         "nombre":"Bahía Blanca",
         "provincia":1
        },
        {"nombre":"Villa Crespo","provincia":0},
        {"nombre":"Chivilcoy","provincia":1}
         ];

function cargarCiudades(){

  var provId = comboProv.value;

  var comboCity = document.getElementById('city');
  for(i=0;i<ciudades.length;i++){
    if(ciudades[i].provincia == provId){
      var op = document.createElement('option');
      console.log(ciudades[i].provincia);
      op.value = i;
      op.innerHTML = ciudades[i].nombre;
      comboCity.appendChild(op);  
    }
  }
}

var btnEnviar = document.getElementById('enviar');
var comboProv = document.getElementById('provs');
console.log(ciudades);

/*** Funciones ***/

function cargarProvincias(){

  var provincias = ["CABA","Bs As","Cordoba"];
  console.log(provincias);
  
  for(i=0;i<provincias.length;i++){
    var op = document.createElement('option');
    console.log(op);
    op.value = i;
    op.innerHTML = provincias[i];
    comboProv.appendChild(op);
  }
}

function validarFormulario(){
  
  var obligatorios = document.getElementsByClassName('obligatorio');
  var obLabels = document.getElementsByClassName('obLabel');
  console.log(obligatorios);

  for (var i = 0; i< obligatorios.length; i++) {
    if(obligatorios[i].value.length == 0){
      obLabels[i].innerHTML = "Campo obligatorio";
    }
  } 

var mail = document.getElementById("email");
if(mail.value.length > 0)

function validarMail(mail){

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(mail)){
    return true; 
  } else {
  return false;  
  }
}
       
  var mail = document.getElementById('email');
  if(mail.value.length > 0){

    if(!validarMail(mail)){
      var emailError = document.getElementById('emailError');
      emailError.textContent = "Formato de email no valido";
      emailError.classList.add("error2");
      console.log("formato invalido");
    }
      if(!validarMail(mail)){
      var emailError = document.getElementById('emailError');
      emailError.innerHTML = "Formato de<span class="error2">email</span>";
      console.log("formato invalido");
    }
   }
    (valido){
      var form=document.getElementById("inscipcion");
      form.submit;
    }
  }


/*** Llamadas a funciones ***/

cargarProvincias();

 btnEnviar.addEventListener('click',validarFormulario);
comboProv.addEventListener('change',cargarCiudades);
var btnEnviar = document.getElementById("enviar");
var comboProv = document.getElementById("provs");
//cargarProvincias();
//cargarCiudades(1),
eventListener("click",validarFormulario);
eventListener("click",validarEdad);
eventListener("change",cargarCiudades);

function limpiar(){
  var inputs=document.getElementByTagName("input");
  console.log(inputs);
  var inputsArray=Array.from(inputs);
  console.log(inputsArray);
  inputsArray.forEach(function(e){
    console.log(e);
    if(e.type=="checkbox"){
      e.checked=false;
    }else{
      e.value="";
    }
    elem.value="";

  }
});

var selects=document.getElementByTagName("input");
console.log(inputs);
var btmRem=document.getElementById("btm-limpiar");
btmRem.addEventListener("click",limpiar);
/* orden:
   var globales
   funciones
   eventListeners
   llamar funciones
*/
   



