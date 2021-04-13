const rando = require('./zadatak6');

var aBrojevi = [];

var broj;

for(i = 1; i<= 3; i++)
{
    broj = rando.dajSlucajanBroj(10, 100);
    aBrojevi.push(broj);
}

console.log(aBrojevi);

last1 = aBrojevi[0]%10;
last2 = aBrojevi[1]%10;
last3 = aBrojevi[2]%10;


var brPodud = 0;

if(last1 == last2)
{
    brPodud++;
}
if(last1 == last3)
{
    brPodud++;
}
if(last2 == last3)
{
    brPodud++;
}
if(brPodud >=1)
{
    console.log("true");
}