// const nome =  ['Lucas', 'Antonio', 'Henrique'];
const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Antonio'
};

for (let key in pessoa) {
    console.log(key, pessoa[key]);
}

// For clássico - Geralmente com iteráveis (array ou strings)
// For In - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em sí (iteráveis, arrays ou strings)

// for (i = 0; i < nome.length; i++) {
//     console.log(nome[i]);
// }

// for (let i in nome) {
//     console.log(nome[i]);
// }

// for (let valor of nome) {
//     console.log(valor);
// }

// nome.forEach(function(valor, indice, array) {
//     console.log(valor, indice, array);
// });

