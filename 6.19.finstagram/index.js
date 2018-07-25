const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();


//middleware
app.use(express.static(__dirname + '/uploads/'));
app.set('view engine', 'pug');
// ej se trae: http://localhost:4000/hackerman.png
// npm install pug en la terminal

// default options
//app.use(fileUpload());

app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
}));
 
const pics = [];

app.get('/feed', function(req, res){
  res.render ('feed', {pics:pics});
});

app.post('/upload', function(req, res) { //FUNCION QUE SUBE LA IMG
  if (!req.files)
    
    return res.status(400).send('No files were uploaded.');
 
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;

  console.log(sampleFile);

  var fileName = req.files.sampleFile.name;
 
  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(__dirname + '/uploads/' + fileName, function(err) {
    
    if (err)
      
      return res.status(500).send(err);
 
    res.send('File uploaded!');
    pics.push({'nombre': fileName,
               'comentario': req.body.comentario, //todo lo que no sea img (que la trata el fileUpload), viene en el body
               'comentario2': req.body.comentario2
              })
  });

});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
/*
app.get('/upload/', function (req, res) {
  res.send(req.params)
})
*/