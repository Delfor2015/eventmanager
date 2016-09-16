var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(__dirname+'/public'));

app.get('/', function(request, res){
	//response.send('Hola Mundo desde NodeJS y Express');
	res.sendFile(__dirname + '/index.html');
})
app.get('/pagina1',function(req, res){
	res.sendFile(path.join(__dirname + '/pagina1.html'))
})

app.get('/user',function(req,res){
    res.send({username:'delfor',password:'delfor1234'})
})
app.get('/pagina2',function(req, res){
	res.sendFile(path.join(__dirname + '/pagina2.html'))
})
app.listen(9090,function(){
   console.log('servidor corriendo correctamente.');
})