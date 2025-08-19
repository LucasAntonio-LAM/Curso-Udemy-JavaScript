class Pessoa {  
    constructor (nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando!`);
    }

}

function Pessoa2 (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando!`);
};

const p6 = new Pessoa2('Maria', 'Joaquina');

const p1 = new Pessoa('Lucas', 'Antonio');
const p2 = new Pessoa('Maria', 'Antonio');
const p3 = new Pessoa('Joana', 'Antonio');
const p4 = new Pessoa('João', 'Antonio');
const p5 = new Pessoa('Luna', 'Lima');

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
console.log(p5);
console.log(p6);