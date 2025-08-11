/*

### 1. Validação de CPF (11 dígitos)

*Descrição*
Implemente a verificação dos dois dígitos verificadores do CPF sem usar bibliotecas prontas.

*Entrada*
Uma string contendo exatamente 11 algarismos (00000000000).

*Saída*
valido ou invalido.

*Exemplo*


Entrada: 74697131401
Saída: valido

*/

const cpf = "010.789.242-10";
let clean = cleanCPF(cpf);

function cleanCPF(sentCpf) {
    return sentCpf.replace(/\D+/g, '');
};

function isSequence(cleanCPF) {
    const sequencia = cleanCPF[0].repeat(cleanCPF.length);
    return sequencia === cleanCPF;
};


function calculateDigitOne(cpf) {
    const cpfArray = Array.from(cpf);
    let multiplier = cpfArray.length + 1;
    let soma = 0;

    for (let i = 0; i < cpfArray.length; i++) {
        soma += Number(cpfArray[i]) * multiplier
        --multiplier;
    };

    const dig = 11 - (soma % 11);
    return dig > 9 ? '0' : String(dig);
}

function verifyCPF(sentCpf) {
    if (sentCpf.length != 11) return console.log('Falso1');
    if (typeof sentCpf === 'undefined') return console.log('Falso2');
    if (isSequence(clean) != false) return console.log('Falso3');

    const partialCPF = sentCpf.slice(0, -2);
    const digit1 = calculateDigitOne(partialCPF);
    const digit2 = calculateDigitOne(partialCPF + digit1);

    const newCPF = partialCPF + digit1 + digit2;
    return newCPF === sentCpf;
};

function validOrInvalid() {
    if(verifyCPF(clean) === true) {
        console.log('Este CPF é válido!');
    } else {
        console.log('Este CPF é Inválido!');
    };
};


validOrInvalid();





