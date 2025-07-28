// Factory Function (Função Fabrica)
// Constructor Function (Função construtora)

function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        fala(assunto = 'falando sobre NADA') { // Metodo
            return `${this.nome} está ${assunto}.`;
        },            // this se refere ao p2 que esta sendo chamado lá embaixo

        altura: a,
        peso: p,

        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Lucas', 'Antonio', 1.70, 80);
// console.log(p1.fala('Falando sobre JS')); 
// console.log(p1.imc);
// const p2 = criaPessoa('Maria', 'Joaquina', 1.60, 42);
// console.log(p2.imc);
// console.log(p2.fala('Falando sobre JS')); 

// console.log(p1.imc);
p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.nomeCompleto);