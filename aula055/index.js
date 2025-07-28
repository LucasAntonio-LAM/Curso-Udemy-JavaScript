// IIFE -> Immediately invoked function expression

(function (idade, peso, altura) { // parametros que vieram dos argumentos
    
    const sobrenome ='Miranda';
    function criaNome(nome) { // Pode-se criar funções que nem no escopo global
        return nome + ' ' + sobrenome; // variaveis não conflitam com o escopo global pq a função esta protegida
    }

    function falaNome() {
        console.log(criaNome('Lucas'));
    }
    
    falaNome();
    console.log(idade, peso, altura);
})(30, 80, 1.70); // Argumentos ja passados pq a função esta sendo executada

const nome = 'Luna';