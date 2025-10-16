var nomes = ["Rafael", "Andreyna", "Mariana", "Francinaldo", "Arthur"];

nomes.forEach((nome) => console.log("Nomes foreach:", nome));

var numeros = [1,2,3,4,5,6,7,8,9,10];
const dobro = numeros.map((num) => console.log("Numero dobrado:", num*2));

const impares = numeros.filter((impar) => impar % 2 != 0 );

console.log("Números impares:", impares);