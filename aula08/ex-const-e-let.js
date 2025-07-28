/*
Lucas Antonio tem 25 anos, pesa 88 kg
tem 1.7 de altura e seu IMC é de 
Lucas Antonio nasceu em 
*/

const nome = 'Lucas';
const sobrenome = 'Antonio';
const idade = 26;
const peso = 88;
const altura = 1.70;
let imc;
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2025 - idade;

console.log(nome, sobrenome,'tem', idade, 'anos, pesa', peso, 'kg');
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`); // Template Strings
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`) 