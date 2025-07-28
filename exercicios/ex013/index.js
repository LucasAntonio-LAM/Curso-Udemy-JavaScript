// Faça um programa que leia um número e verifique se ele é par ou ímpar. Exiba uma mensagem indicando o resultado.

function verifyEvenorOdd(numero) {
    if (numero % 2 === 0) {
        console.log(numero, 'é par');
    } else {
        console.log(numero, 'é impar');
    }
}

verifyEvenorOdd(5);