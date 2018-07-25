var http = require('http');
var puerto = "8080";
var url = require('url');
var miModulo = require('./modulos/proceso');

http.createServer(function(req,res){
res.writeHead(200,{'Content-type':'text/html'});

var q = url.parse(req.url, true).query;

let m = q.month;
let d = q.day;

let respuesta = miModulo.signo(m,d);

res.end(respuesta)
}).listen(puerto, function(){
    console.log("Escuchando en el puerto 8080");
});

//url.com/?nombre=pepe&apellido=nada