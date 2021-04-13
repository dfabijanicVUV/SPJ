const rando = require('./zadatak6');

var aBrojevi = [];

var broj;

for(i = 1; i<= 30; i++)
{
    broj = rando.dajSlucajanBroj(10, 20);
    aBrojevi.push(broj);
}
console.log(aBrojevi);
for (var j = 0; j < aBrojevi.length - 1; j++) {
    for (var i = 0, swapping; i < aBrojevi.length - 1; i++) {
      if (aBrojevi[i]> aBrojevi[i + 1]) {
        swapping = aBrojevi[i + 1];
        aBrojevi[i + 1] = aBrojevi[i];
        aBrojevi[i] = swapping;
        }; 
    }; 
};

console.log(aBrojevi);