// Escreva uma função que recebe 2 números e retorne o maior deles


function minMax(num1, num2) {
    let max = Math.max(num1, num2);
    console.log(max);
};

minMax(15, 25);

// Outras Alternativas de Resultado Certo

// function max(x, y) {
//     if (x > y) {
//         return x;
//     } else {
//         return y;
//     }
// }

// console.log(max(10,2));

// xxxxxxxxxxxxxxxxxxxxxx

// function max(x, y) {
//     if (x > y) {
//         return x;
//     } return y;
// }

// function max(x, y) {
//     if (x > y) return x;
//     return y;
// }

// function max(x, y) {
//     return x > y ? x : y; // Condição Ternária
// }

// const max2 = (x, y) => {
//     return x > y ? x : y; // Arrow Function
// }

const max2 = (x, y) => x > y ? x : y;
console.log(max2(2, 10));
