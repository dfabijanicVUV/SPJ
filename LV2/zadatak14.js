var broj = 999;

var lastdig = broj%10;
var firstdig = broj;
console.log(lastdig);

if(broj >99)
{
while (broj>=10)
{
    broj = broj/10;
}
console.log(broj);
var sum = lastdig + Math.floor(broj);
console.log(sum);
}
else 
{
    console.log("Broj nije veci od 99");
}