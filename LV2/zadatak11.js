var http = require('http');
var nPort = 8000;
var rando = require("./zadatak6");
var fs = require("fs");

var osobe = JSON.parse(fs.readFileSync("osobe.json"));
http.createServer(function(request, response){
response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
response.write(JSON.stringify(osobe));
response.end();
}).listen(nPort);