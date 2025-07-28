const raiz = n => n ** 0.5; // Arrow Function - Simplificação de funções de uma linha

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

// const raiz = function (n) { // Função Anonima - Jeito diferente de fazer uma função
//     return n ** 0.5;
// }

// console.log(raiz(9));
// console.log(raiz(16));
// console.log(raiz(25));

// function soma(x = 1, y = 1) {
//     const resultado = x + y; // Função que pega dois numeros e resolve, 
//     return resultado; // A partir que o interpretador encontrar o return acaba a function
// }

// const resultado = soma(4, 2); // Valor fixo
// console.log(resultado);

// const resultado = soma(5); // Não funciona, retorna valor NaN
// console.log(resultado);

// const resultado = soma(2, 2);
// console.log(resultado); 

// console.log(soma(2, 2));
// console.log(resultado); // Não pode ser acessado

// function saudacao(nome) {
//     return `Bom dia ${nome}!`; // Função pode ou não retornar um valor
// }

// const variavel = saudacao('Lucas'); // A variavel pode pegar o retorno da função e ser exibido
// console.log(variavel);
