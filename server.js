// server.js

// Dependencia para subir o servidor.
var http = require('http');
// Modulo criado com as configuracoes.
var app = require('./config/express')();

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express Server escutando na porta ' + app.get('port'));
});