var rando = require("./zadatak6");

var aBrojevi = [];
var broj; 
for (var i=1; i<=200; i++)
{
    broj = rando.dajSlucajanBroj(150, 1500);
    aBrojevi.push(broj);
}

var max = aBrojevi[0];
var min = aBrojevi[0];

aBrojevi.forEach(nBroj => {
    if(nBroj > max)
    {
        max = nBroj;
    }
    else if(nBroj < min)
    {
        min = nBroj;
    }
});

console.log(`Najveci: ${max}`);
console.log(`Najmanji: ${min}`);