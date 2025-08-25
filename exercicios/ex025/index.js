/*
---

### 9. Converter Número por Extenso (PT-BR até 999)

*Descrição*
Entrada: inteiro de 0 a 999.
Saída: número por extenso em português brasileiro (ex.: 342 → “trezentos e quarenta e dois”).

---
*/

const oneToNineteen = ['Zero', 'Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez', 'Onze', 'Doze', 'Treze', 'Quatorze', 'Quinze', 'Dezesseis', 'Dezessete', 'Dezoito', 'Dezenove'];
const twentyToHundred = ['Vinte', 'Trinta', 'Quarenta', 'Cinquenta', 'Sessenta', 'Setenta', 'Oitenta', 'Noventa'];
const hundredToNineHundred = ['Cento', 'Duzentos', 'Trezentos', 'Quatrocentos', 'Quinhentos', 'Seiscentos', 'Setecentos', 'Oitocentos', 'Novecentos'];
const numberRange = {min: 0, max: 999};


function integerRange(value) {
    if (typeof value != 'number') {
        throw new TypeError('Não é um número válido');
    }

    if (value < numberRange.min || value > numberRange.max) {
        throw new RangeError(`Número fora do intervalo`);
    }
    
   disassembleNumber(value); 
}

function disassembleNumber(value) {
    
    const getHundred = Math.trunc(value/100);
    const getDozens = Math.trunc(value % 100 / 10);
    const getForUnit = Math.trunc(value % 100);
    const getUnit = getForUnit % 10;
    const getDozensPlusGetUnit = getDozens + "" + getUnit;
    

    let translateHundred;
    let translateDozens;
    let translateUnit;
    let completeSentence;

    
    if (getHundred === 1 && getDozens === 0 && getUnit === 0) {
        translateHundred = 'Cem'
        completeSentence = `${translateHundred}`;
    } else if (getHundred === 0) {
        translateHundred = '';
    } else if (getHundred > 0 && getDozens === 0 && getForUnit > 0) {
        translateHundred = hundredToNineHundred[getHundred - 1];
        completeSentence = `${translateHundred} e`
    } else {
        translateHundred = hundredToNineHundred[getHundred - 1];
        completeSentence = `${translateHundred} `;
    };

    if (getDozens === 1) {
        translateDozens = oneToNineteen[getDozensPlusGetUnit];
        completeSentence = `${translateDozens}`
    } else if (getDozens === 0) {
        translateDozens = '';
    } else if (getHundred < 1 && getDozens > 1) {
        translateDozens = twentyToHundred[getDozens - 2];
        completeSentence = `${translateDozens}`
    } else {
        translateDozens = twentyToHundred[getDozens - 2];
        completeSentence += `e ${translateDozens}`
    };

    if (getHundred <= 0 && getDozens <= 0 && getUnit === 0) {
        translateUnit = oneToNineteen[getUnit];
        completeSentence += ` e ${translateUnit}`;
    } else if (getDozens === 0 && getUnit === 0) {
        translateUnit = '';
    } else if (getDozens > 0 && getUnit === 0) {
        translateUnit = '';
    } else if (getHundred < 1 && getDozens === 0 && getUnit > 0) {
        translateUnit = oneToNineteen[getUnit];
        completeSentence += ` e ${translateUnit}`;
    } else if (getDozens > 1 && getUnit > 0) {
        translateUnit = oneToNineteen[getUnit];
        completeSentence += ` e ${translateUnit}`;
    } else if (getDozens >= 1 && getUnit < 10) {
        translateUnit = '';
    } else {
        translateUnit = oneToNineteen[getUnit];
        completeSentence += ` ${translateUnit}`;
    }

    console.log(completeSentence);
}

integerRange(969);



