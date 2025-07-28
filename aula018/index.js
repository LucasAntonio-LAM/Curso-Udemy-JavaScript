const pessoa1 = {
    nome: 'Lucas', 
    sobrenome: 'Antonio',
    idade: 25,

    fala() {   // Função dentro do objeto = Metodo
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

// function criaPessoa (nome, sobrenome, idade) {
//     return { nome, sobrenome, idade };
// }

// const pessoa1 = criaPessoa('Lucas', 'Antonio', 25);
// const pessoa2 = criaPessoa('Maria', 'Norma', 35);
// const pessoa3 = criaPessoa('João', 'Puto', 45);
// const pessoa4 = criaPessoa('Junior', 'Meme', 55);
// const pessoa5 = criaPessoa('Jean', 'Mago', 15);
// const pessoa6 = criaPessoa('Robson', 'Baiano', 265);

// console.log(pessoa1.nome);
// console.log(pessoa2.nome);
// console.log(pessoa3.sobrenome);

// const pessoa1 = { // Criação de objeto, Atributos separados por virgula
//     nome: 'Lucas', 
//     sobrenome: 'Antonio',
//     idade: 25
// };

// const pessoa2 = {
//     nome: 'Carol',
//     sobrenome: 'Lima',
//     idade: 25
// };

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// console.log(pessoa1.idade);