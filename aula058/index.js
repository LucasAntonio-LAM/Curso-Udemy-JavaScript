// Função construtora -> objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {

    // Privadas - não podem ser acessados fora da função
    const ID = 123456;

    const  metodoInterno = function() {

    };

    // Atributos ou metodos publicos podem ser acessados fora da função
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um metódo');
    };
}

const p1 = new Pessoa('Lucas', 'Antonio');
const p2 = new Pessoa('Luna', 'Lima');
p1.metodo();!
console.log(p1.nome);
console.log(p2.nome);