// Faça um programa que leia 2 números, some-os e exiba uma mensagem com o resultado apenas se o resultado for maior que 100.

function soma(n1, n2) {
    const soma = n1 + n2;
    if (soma > 100) {
        console.log(`A soma é maior que 100 ${soma}`);
    } else {
        console.log(`A soma é menor que 100 ${soma}`);
    }
}

soma(10,20);