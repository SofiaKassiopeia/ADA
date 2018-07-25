var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
	fs.readFile('memory/memory.html', function(err, data) {
	res.writeHead(200/*status*/, {'Content-Type': 'text/html'});
	res.write('Hola Mundo!');
	//creo servidor
	res.end();});
}).listen(8080);