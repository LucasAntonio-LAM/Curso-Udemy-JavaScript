const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Antonio',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// Atribuição via desestruturação
const { nome: n, sobrenome, endereco: {rua: r = 12345, numero}, endereco } = pessoa;
console.log(n, sobrenome, r, numero, endereco);