// Função definidada com a palavra function tem uma variavel especial chamada arguments que sustenta todos os argumentos enviados.

// function funcao(a, b, c) {
//     let total = 0;
//     for (let argumento of arguments) {
//         total += argumento;
//     }

//     console.log(total, a, b, c);
// }
// funcao(1,2,3,4,5,6,7);

                   // B assumir um valor padrão 
function funcao(a, b = 2, c = 4) {
    // b = b || 0; // Valor padrão = 0
    console.log(a + b + c);
}     // Quando enviado um valor ele perde o valor padrão
funcao(2, undefined, 20);
          // Para assumir o valor padrão precisa colocar undefined, é a unica maneira.

                // Via atribuição via desestruturação
function funcao1({ nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}      // Objeto literal como argumento da função
funcao1({ nome: 'Lucas', sobrenome: 'Antonio', idade: 20 });

                  // Funciona da mesma forma, as variaveis são retiradas do objeto.  
function funcao2({ nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}      // Objeto literal como argumento da função
let obj = { nome: 'Lucas', sobrenome: 'Antonio', idade: 20 };
funcao2(obj);

           // Desestruturação com arrays
function funcao3([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}     // o Array tbm pode ser colocado em uma variavel
funcao3(['Lucas', 'Antonio', 20]);


                                    // Rest operator, o resto estara todo nos numeros, dentro de um array.
const conta = function(operador, acumulador, ...numeros) { // Rest operator tem que ser o ultimo parametro.
    console.log(operador, acumulador, numeros);
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }

    console.log(acumulador);
};
conta('+', 1, 20,30,40,50);