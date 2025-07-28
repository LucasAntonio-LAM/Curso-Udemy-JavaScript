// For in -> Lê os índices ou chaves do objeto

// const frutas = ['Pera', 'Maçã', 'Uva'];

const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Antonio',
    idade: 25
};

for (let key in pessoa) {
    console.log(key, pessoa[key]);
}

// for (i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

// for (let indice in frutas) { 
//     console.log(frutas[indice]);
// }

