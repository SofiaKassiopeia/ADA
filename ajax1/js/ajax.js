/*$('#test').on('click',(e)=>{

 let   values = {'asiento': $('#asiento').val()};   
                                    
 $.ajax({
          url: "http://mariabelenalegre.com/adApi/avion/checkPasaje.php",
          type: "post",
          data: values,
          success: function (response) {
                                                     
            if(response == 1){
                                                 
                   alert("Ok");
            }else{
                    alert("Error");
            }        
          },
          error: function(response) {
                  console.log("error");
          }
        }); 
});
*/

 


$(document).ready(function(e){
  $.ajax({
  method: "GET",
  url: "https://jsonplaceholder.typicode.com/post/1/comments",
  //data: {name: "John", location: "Boston"}
}).done(function(posts){
  console.log(posts)//aca va el codigo para mostrar los resultados
  var lista = $('#lista')

  for(var i=0; i< posts.length; i++){
    var nombre = posts[i].name;
    var email = posts[i].email;
    var comments = posts[i].body;
    console.log(nombre, email, comments)
    lista.append('<li>'+ nombre + '<br/>' + email + '<br/>' + comments +'</li>')
  }


  })
})


