// Return = Retorna um valor - Termina a função

function soma(A, B) {
    return A + B
}

// Essa função não retorna nada
function soma2(A, B) {
    console.log(A + B); // Só exibe no console não retorna nenhum valor.
}

soma2(2, 5);


// // Não retorna também, mas tem funcionalidade.
// document.addEventListener('click', function() {
//     document.body.style.backgroundColor = 'red';
// });


  // Ja cria o objeto automaticamente, a variavel nome e sobrenome, por ja serem os nomes das variaveis o javascript ja entende que esses são os nomes.
function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome };
}

const p1 = criaPessoa('Lucas', 'Antonio'); // Os dois fazem a mesma coisa, porem a função ja cria automaticamente o objeto.
const p2 = { 
    nome: 'João',
    sobrenome: 'Oliveira'
};
            // Dois objetos, criados de formas diferentes
console.log(typeof(p1), typeof(p2));

function falaFrase(comeco) { // FalaFrase retorna falaResto que é uma função
    function falaResto(resto) { // A function falaResto é chamada por fala e passa o parametro resto e retorna o parametro comeco junto com uma string vazia para dar espaço e com o parametro resto que foi passado pela fala lá na const resto.
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá'); // const Fala recebe falaFrase que recebe um parametro e retorna a função falaResto, fala recebe a função falaResto que retornou da funcao falaFrase, para executar essa funcao fala precisa ser chamada como funcao.
const resto = fala('Mundo!'); // dentro de uma const para ser exibida, fala é chamada como funcao, executando a funcao fala resto e passando um parametro.
console.log(resto);

           
function criaMultiplicador(multiplicador) { // Recebe multiplicador e retorna uma function
    // Multiplicador
    return function(n) {
        return n * multiplicador; // Para chamar essa funcao é so chamar a const duplica, triplica ou quadriplica e passar o parametro N, para ser a feito a multiplicação
    };
}

const duplica = criaMultiplicador(2); // Chama a funcao criaMultiplicador e passa um parametro e tambem recebe o retorno dela, que seria a function que recebe o numero e usa o multiplicador
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(10));