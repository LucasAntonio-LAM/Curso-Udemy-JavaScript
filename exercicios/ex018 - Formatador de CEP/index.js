/*
### 2. Formatação de CEP

*Descrição*
Converta um CEP de 8 dígitos em sua forma com hífen.

*Entrada*
01311000

*Saída*
01311-000

 */

const CEP = '01311000';

// function getTheFirstFiveNumbers(cep) {
//     return cep.slice(0, -3);
// };

// function getTheLast3Number(cep) {
//     return cep.slice(-3);
// };

// function cepFormatted(cep) {
//     const fiveNumbers = getTheFirstFiveNumbers(CEP);
//     const threeNumbers = getTheLast3Number(CEP);
//     const formattedCep = `${fiveNumbers}-${threeNumbers}`;

//     console.log(formattedCep);
// };

// cepFormatted(CEP);


function cepFormatted(cep) {
    const fiveNumbers = cep.slice(0, -3);
    const threeNumbers = cep.slice(-3);
    const formattedCep = `${fiveNumbers}-${threeNumbers}`;

    console.log(formattedCep);
};

cepFormatted(CEP);
