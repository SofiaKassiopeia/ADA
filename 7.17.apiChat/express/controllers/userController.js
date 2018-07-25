var users = [{"id": 1,
              "user": "Pepe",
              "pass": "1234", 
              "concatenado": false,
              "amigos":[2]
            },
             {"id": 2,
             "user": "Quory",
             "pass": "password", 
             "concatenado": false,
             "amigos":[1]
            },
             {"id": 3,
              "user": "Pepita",
              "pass": "pepper", 
              "concatenado": false,
              "amigos":[]
            },
            
            ];

self.validarUsuario = function(username ,pass){
    
   let == users.find(u=>u.user == username && u.pass == pass) 
   if (valido) return valido.id;
   return 0;
}

self.getAmigos = function(id){
    let respuesta = []; // arreglos de ids
    let yo = users.find(u=>u.id == id);  //yo es uno de los objetos completo
    for(i = 0; i<yo.amigos.length; i++){
        for(j=0; j<users.length;i++){
        if(users[j].id == yo.amigos[i]){
            //username y estado
         let user = {'username': users[j].users,
                   'estado': users[j].conectado}
                
                   respuesta.push(user);
                }

         }
    }

    return respuesta
}
self.setStatus = function(id){
    let yo = users.find(u=>u.id == id);
    yo.conectado == true
}

self.get

self.existeUsuario = function(username){

    let usuario = users.find(u=>u.username == username);
    return usuario.id;
}

self.agregarAmigo = function(yo,amigoId){
    
    [1,2] <= amigoId
    if(yo.amigos.idexOf(amigoId) === -1){    //indexOf devuelve position y si no existe, -1
 
    } 
    let usuario = users.find(u=>u.username == username);
    return usuario.id;
}

module.exports = self
