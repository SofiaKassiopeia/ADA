//paquetes necesarios para el proyecto
var http = require('http');

var miControlador = require('./controladores/funciones');

//cargo mi propio modulo

//seteamos el puerto en el cual va a escuchar los pedidos de la aplicacion
var puerto = '8080';

http.createServer(function(req,res){
res.writeHead(200,{'Content-type':'text/html'});
res,write(miControlador.random());
res.end();
}).listen(puerto, function(){
    console.log("Escuchando en el puerto"+puerto);
});