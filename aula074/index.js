// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => 'original: ' + this.nome + ' ' + this.sobrenome;
}

// Pessoa.prototype === pessoa1.__proto__

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
};

// istância
const pessoa1 = new Pessoa('Lucas', 'A.'); // <- Pessoa = função construtora
const pessoa2 = new Pessoa('Luna', 'L.'); // <- Pessoa = função construtora
const data = new Date(); // <- Date = função construtora

console.dir(data);
console.dir(pessoa1);   
console.dir(pessoa2);