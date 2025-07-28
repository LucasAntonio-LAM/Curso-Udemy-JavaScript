// Escreva uma função ePaisagem que recebe dois argumentos, largura e altura de uma image(number)
// Retorne true se a imagem estiver no modo paisagem.

function ePaisagem(largura, altura) {
    if (largura > altura) {
        return true;
    } return ('A imagem não esta no modo paisagem.');
};

console.log(ePaisagem(500, 1000));

// Outras formas

function ePaisagem2(largura, altura) {
    return largura > altura ? true : false; // Condição Ternária
} 

console.log(ePaisagem2(500, 1000));

function ePaisagem3(largura, altura) {
    return largura > altura // Já retorna true ou false
} 

console.log(ePaisagem3(500, 1000));

const paisagem = (altura, largura) => largura > altura
console.log(paisagem(1000, 200));