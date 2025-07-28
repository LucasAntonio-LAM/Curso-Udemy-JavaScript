function retornaFuncao(nome) {
    return function() { // Essa function tem acesso ao escopo dela, da mãe e do global.
        return nome;
    };
}

const funcao = retornaFuncao('Lucas'); // Aqui é definido o closure dessa função, ele não mudara depois disso.
const funcao2 = retornaFuncao('João');
console.dir(funcao);
console.dir(funcao2);