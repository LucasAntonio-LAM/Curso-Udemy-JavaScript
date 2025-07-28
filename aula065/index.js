// Filter -  sempre retornar um array, com a mesma quantidade de elementos ou menos.

// // Retorne os números maiores que 10.
// const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];

// const filterNumbers = numeros.filter((valor, indice, array) => { // Filter precisa de uma função de callback para checar todos os numeros do indice e determinado pelo resultado boolean ela vai voltar oq foi requerido.
//     return valor > 10;
// });

// console.log(filterNumbers);

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com A

const pessoas = [
    { nome: 'Luka', idade: 62},
    { nome: 'Maria', idade: 22},
    { nome: 'Luna', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47},
];

const personsWithBigName = pessoas.filter((obj) => obj.nome.length >= 7);
const personsWith50orMore = pessoas.filter((obj) => obj.idade > 50);
const personsWithAfinal = pessoas.filter((obj) => obj.nome.toLowerCase().endsWith('a'));

console.log(personsWithBigName);
console.log(personsWith50orMore);
console.log(personsWithAfinal);