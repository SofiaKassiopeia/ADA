var arrayNombres = ["Pepa", "Holandesa", "me gustan los muffins"];

var oveja = ["Lala", "pics/oveja.png"]; //arreglo
var conejo = ["Pepito", "pics/rabbit.jpeg"];//arreglo
var amigos  = [oveja, conejo];

console.log("nombre del conejo: " +amigos[1][0]);
var i,j;
for(i=0;i<amigos.length;i++){
	console.log(amigos[i]);
	for(j=0;j<amigos[i].length;j++){ //j recorre todo los elementos dentro de la fila
	 console.log(amigos[i][j]+",");
	}
}

var amigosDiv = document.getElementById("amigos");

function cargarDatosPersonales(arrayNombres){

var nombre = document.createElement("h1");
nombre.textContent = arrayNombres [0];

var nationalidad = document.createElement("h2")   
nationalidad.textContent = arrayNombres[1];

var resumen = document.createElement("p");
resumen.textContent = arrayNombres[2];

var dpDiv =document.getElementById("datosPerfil")
dpDiv.appendChild(nombre);
dpDiv.appendChild(nationalidad);
dpDiv.appendChild(resumen);
}

/*muesta en html lista de imagenes
@params lista | array
void
*/
function cargarListaImagenes(/*arreglo*/lista/*de amigos*/,padre/*donde voy hacer el append*/){
	var img = document.createElement("img");
	for(i=0;i<lista.length;i++){
	img.src =lista[i][1];
	console.log(img.src)
	padre.appendChild(img);
	}
}
entradas
var muro = document.getElementById("muro");
function cargarMuro(m){
	var ul = document.createElement("ul");
	ul.setAttribute("id","posts");
	if (entradas.length>0) {
	m.innerHTML ="";
	for(var i=0; i<entradas.length; i++){ 
		var li = document.createElement("li");
		var img = document.createElement("img");
		img.src = "pics/rabbit.jpeg";
		img.classList.add("thumb"); /* like adding a class to the img*/
		/*image.style.display = "display-inline"*/
		li.appendChild(img);
		var texto = document.createElement("p"); /*like adding a "p" inside of every li because of the for that */
		texto.textContent = entradas[i];
		li.appendChild(texto); 
		ul.appendChild(li);
		//primero hay que crear el padre porque no existe en el html (para el hijo) (empezar de adentro con hijos)
	}
	
  }
  m./*muro*/appendChild(ul);
}
function publicar(){
	var lista = document.getElementById("posts");
	var entrada = document.getElementById("entrada")
	var texto = entrada.value; //con los input se queda con los "values"
	entradas.push(texto);

	    var li = document.createElement("li");
		var img = document.createElement("img");
		img.src = "pics/rabbit.jpeg";
		img.classList.add("thumb"); /* like adding a class to the img*/
		/*image.style.display = "display-inline"*/
		li.appendChild(img);
		var t = document.createElement("p"); /*like adding a "p" inside of every li because of the for that */
		t.textContent = entradas[entradas.length-1];
		li.appendChild(t); 
		ul.appendChild(li);

	console.log(texto);
	//cargarMuro(muro);

}

cargarDatosPersonales(arrayNombres);
cargarListaImagenes(amigos,amigosDiv);
cargarMuro(muro);

var btnEnviar = document.getElementById("enviar");
btnEnviar.addEventListener("click".publicar);