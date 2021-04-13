var rando = require("./zadatak6");

var aPolje = [];

for(var i=1; i<=50; i++)
{
    if(i%7 == 0)
    {
        aPolje.push(i);
    }
} 

var aParniBrojevi = [];

aPolje.forEach(nBroj => {
    if(nBroj%2 == 0)
    {
        aParniBrojevi.push(i);
    }
});

console.log(aParniBrojevi);

var aBrojevi = [];
var broj; 
for (var i=1; i<=100; i++)
{
    broj = rando.dajSlucajanBroj(50, 5000);
    aBrojevi.push(broj);
}

var parni = 0;
var neparni = 0;

aBrojevi.forEach(nBroj => {
    if(nBroj%2 == 0)
    {
        parni++;
    }
    else{
        neparni++;
    }
});

console.log(`Parni: ${parni}`);
console.log(`Neparni: ${neparni}`);

