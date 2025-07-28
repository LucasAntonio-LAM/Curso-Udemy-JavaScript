// Declaração de função (function hoisting)
function falaOi() {
    console.log('Oi');
}

// First-Class Objects
// Function Expression

const souUmDado = function() {
    console.log('Sou um dado');
};

souUmDado();

function executaFuncao(funcao) {
    funcao();
}

executaFuncao(souUmDado);

// Arrow Function

const funcaoArrow = () => {
    console.log('Sou uma ArrowFunction');
};

funcaoArrow();

// Dentro de um objeto
const obj = {
    falar() {
        console.log('Estou falando');
    }
};

obj.falar();