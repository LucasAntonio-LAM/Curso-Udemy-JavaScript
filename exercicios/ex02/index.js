// Operadores: Crie um programa que solicite ao usuário dois números e 
// exiba o resultado da soma, subtração, multiplicação e divisão desses números.

const p1 = document.querySelector('.soma');
const p2 = document.querySelector('.subtracao')
const p3 = document.querySelector('.multiplicacao')
const p4 = document.querySelector('.divisao')
const num1 = Number(window.prompt());
const num2  = Number(window.prompt());
const soma = num1 + num2;
const sub = num1 - num2;
const mult = num1 * num2;
const div = num1 / num2; 
console.log(num1, num2);

p1.innerHTML = `Soma: A soma entre ${num1} e ${num2}: ${soma}`;
p2.innerHTML = `Subtração: A subtração entre ${num1} e ${num2}: ${sub}`;
p3.innerHTML = `Multiplicação: A multiplicação entre ${num1} e ${num2}: ${mult}`;
p4.innerHTML = `Divisão: A divisão entre ${num1} e ${num2}: ${div}`;


