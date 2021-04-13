var rando = require("./zadatak6");

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

var aBrojevi = [];
var broj; 
for (var i=1; i<=50; i++)
{
    broj = rando.dajSlucajanBroj(1, 20);
    aBrojevi.push(broj);
}


var unique = aBrojevi.filter(onlyUnique);
console.log(unique); 
    
