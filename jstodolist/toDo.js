function cargarLista(){
         var li=document.createElement("li");
         console.log("my li");
         var text=document.getElementByid("tarea").value;
         li.textContent=text;
         var ul document.getElementByid("lista")

}

function limpiar(){
	var inputs=document.getElementByTagName("input");
	inputs.forEach(function(elem){
		elem.value="";

	}
};