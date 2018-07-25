var express = require('express');
// agrego el modulo fileServer
var app = express()

app.get('/', function(req,res){
  res.send("hello");
});

app.use('/customer', require('./customer.js'))

app.listen(3030, function(){
    console.log("listening to 3030");
})

/*
app.get('/prueba', function(req,res){
    res.send("hello from prueba");
  });
app.post('/prueba', function(req,res){
    res.send("hello from prueba");
  }); 
app.put('/prueba', function(req,res){
    res.send("hello from prueba");
  });
app.patch('/prueba', function(req,res){
    res.send("hello from prueba");
  });
app.delete('/prueba', function(req,res){
    res.send("hello from prueba");
  });

  app.all('/prueba', function(req,res){
    res.send('/prueba ALL');
  });

  

for http: 
get: obtain
post: upload
put: edit
patch
delete
*/