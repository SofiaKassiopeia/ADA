/* con javascript
function publicar(){
	var item = document.getElementById("todoInput").value //getting the input by its id
	var text = document.createTextNode(item) //enter var item (its value) into a new var called text and convert it into textnode
	var newItem = document.createElement("li") //create li
	newItem.appendChild(text)//appending whatever text entered into our li
	document.getElementById("todoList").appendChild(newItem)//grab ordered list and append li to it
}
 //all of this only happens when the button is clicked
*/

// con jquery

var input = $('#todoInput')

function publicar(){
      if(input.val() == ''){
        console.log('No publicaste Nada');   
        var elemento1 = '<p>'+ 'no publicaste nada' + '<p>'   
        var texto = $('#error') 
        texto.append(elemento1)
        /*input.val=('') */   

    }else{
        console.log('hola');
        var item = $('#todoInput').val()
        console.log(item)
        var option = $('#todoSelect option:selected').text()
        var elemento2 = '<li>' + item + option +'</li>'
        var lista = $('#todoList')
        lista.append(elemento2)
        input.val('')

     }
}