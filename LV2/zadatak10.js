var http = require('http');
var nPort = 8000;
var rando = require("./zadatak6");


http.createServer(function(request, response){
response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
for (i = 1; i<=10; i++)
{
    var broj = String(rando.dajSlucajanBroj(10,100) + "\n");
    response.write(broj);
}

response.end();
}).listen(nPort);
