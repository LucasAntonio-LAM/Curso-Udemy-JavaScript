// const pessoa = {
//     nome: 'Lucas',
//     sobrenome: 'Antonio'
// };

// const chave = 'nome';
// console.log(pessoa[chave]); // Só consigo acessa a const chave pela notação de colchete
// console.log(pessoa['sobrenome']);

// const pessoa1 = new Object();
// pessoa1.nome = 'Lucas';
// pessoa1.sobrenome = 'Antonio';

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);

// const pessoa2 = new Object();
// pessoa2.nome = 'Lucas';
// pessoa2.sobrenome = 'Antonio';

// delete pessoa2.nome; // Apagar uma chave do objeto
// console.log(pessoa2);

// const pessoas3 = new Object();
// pessoas3.nome = 'Lucas';
// pessoas3.idade = 26;
// pessoas3.sobrenome = 'Antonio';
// pessoas3.falarNome = function() { // Método dentro do objeto
//     return (`${this.nome} está falando seu nome`);
// };
// pessoas3.getBirthDate = function() {
//     const currentDate = new Date();
//     return currentDate.getFullYear() - this.idade; 
// };

// for (let chave in pessoas3) { // Vendo todas as chaves do objeto pessoas3
//     console.log(chave);
//     console.log(pessoas3[chave]);
// }

// Factory function / Constructor Function / Classes (Padrão de Projeto)
// function criaPessoa(nome, sobrenome) { // Factory Function
//     return {
//         nome,
//         sobrenome,
//         get nomeCompleto() { // Executa o metodo sem precisar chama-lo
//             return `${this.nome} ${this.sobrenome}`;
//         }
//     };
// }

// const p1 = criaPessoa('Lucas', 'Antonio');


function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
}

// A palavra new cria um objeto vazio, this = palavra chave, this é atrelhado ao objeto, e quando é chamado por this.nome ele muda de pessoa para pessoa, this varia de pessoa para pessoa.
const p2 = new Pessoa('Lucas', 'Antonio'); // new retorna o this automaticamente sem precisar ser chamado.
Object.freeze(p2);
const p3 = new Pessoa('Carol', 'Lima');
console.log(p2, p3);