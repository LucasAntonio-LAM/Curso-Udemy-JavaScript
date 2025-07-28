// Faça um programa que leia um número e determine se ele é positivo, negativo ou zero.

function pnz(n1) {
    if (n1 < 0) {
        console.log('Numero negativo');
    } else if (n1 === 0) {
        console.log('Numero é zero');
    } else {
        console.log('Numero positivo');
    }
}

pnz(1);