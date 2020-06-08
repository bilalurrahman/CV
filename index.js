var express = require('express');
var app = express();
//var path = require('path');

app
	.use(express.static('./public'))
	.get('/', function(req, res) {
	    res.sendFile('./index.html');
	});

app.listen(5000,()=>{
	console.log('Listening to 5000');
	//console.log('path',path);
});