// Condições: Escreva um programa que pergunte ao usuário sua idade e imprima se ele é maior ou menor de idade.

const idade = Number(window.prompt('Qual é a sua idade? '));

const body = document.querySelector('body');
const p = document.createElement('p');
const p1 = document.createElement('p');
body.appendChild(p);
body.appendChild(p1);

p.textContent = `Sua idade é ${idade} anos`;

if (idade < 18) {
    p1.textContent = `Você é menor de idade`;
} else {
    p1.textContent = `Você é maior de idade`;
}