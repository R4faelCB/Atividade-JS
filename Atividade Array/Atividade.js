// Questão 01
var frutas = ["Maça", "Banana"];
frutas.push("Laranja");
console.log(frutas);

//Questão 02
let numeros = [1,2,3,4];
numeros.pop();
console.log(numeros);

//Questão 03
var animais = ["Gato", "Cachorro"];
animais.unshift("Pássaro");
console.log(animais);

//Questão 04
let cores = ["Vermelho", "Verde", "Azul"];
cores.shift();
console.log(cores);

//Questão 05
let carros = ["Fiat", "Ford", "Chevrolet"];
carros.splice(1, 0, "Volkswagen");
console.log(carros);

//Questão 06
let letras = ["a", "b", "c", "d", "e"];
let letrinhas = letras.slice(1 , 4);
console.log(letrinhas);

//Questao 07
numeros.forEach((number) => console.log(number * 2));

//Questão 08
let idades = [12, 18, 25, 30, 15];
let maior = idades.filter((maiores) => maiores >= 18);
let dobro = maior.map((num) => num * 2);
console.log("Idades de maior:", maior);
console.log("Idades dobradas:", dobro)