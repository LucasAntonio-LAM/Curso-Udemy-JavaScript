// Escreva uma função que recebe um número e retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número não é divisível por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número = Retorna o próprio número
// Use a função com número de 0 a 100

// function random(min, max) {
//     const r = Math.random() * (max - min) + min;
//     return Math.floor(r);
// }

// let rand = random(0, 100);
// i = 0

// function numDiv3e5(num1) {
//     while (i < 100) {
//     num1 = random(0,100);
//     if (num1 % 3 === 0 && num1 % 5 === 0) {
//         console.log(`${num1} é FizzBuzz`);
//     } else if (num1 % 3 === 0) {
//         console.log(`${num1} é Fizz`);
//     } else if (num1 % 5 === 0) {
//         console.log(`${num1} é Buzz`);
//     } else if (isNaN(num1)) {
//         console.log(num1);
//     } else {
//         console.log(num1);
//     }
//     i++;
//     }
// }

// numDiv3e5(rand);


function fizzBuzz(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}



for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}