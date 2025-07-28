// IEEE 754-2008

let num1 = 0.7; // Number
let num2 = 0.1; // Number

num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8 Realizando calculos para arrumar o problema da imprecisão dos numeros multiplicando transformando em um numero literal e voltando ele para obter o resultado desejado
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0 


// num1 = Number(num1.toFixed(2)); - Arrumar o erro da imprecisão dos numeros do javascript com codigos
console.log(Number.isInteger(num1));
console.log(num1);

// console.log(num1.toString() + num2); - Converter o number para string temporariamente
// num1 = num1.toString(); - Alterar para sempre um number para string
// console.log(num1.toString(2)); - Representação Binária
// console.log(num1.toFixed(2)); - Arrendondar/Casas decimais
// console.log(Number.isInteger(num1)); - Verdadeiro ou falso - Inteiro ou Não
// let temp = num1 * 'Ola';
// console.log(Number.isNaN(temp)); - Retornar se a conta for valida ou invalida