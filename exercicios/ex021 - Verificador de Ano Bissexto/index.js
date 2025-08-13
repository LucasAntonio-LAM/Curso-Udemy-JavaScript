/*

### 5. Verificador de Ano Bissexto (Calendário Gregoriano)

Entrada: ano (int).
Saída: bissexto ou comum.

---

*/

const ano = new Date();
const year = ano.getFullYear();


function getTwoLastDigits(number) {
    const numberString = number.toString();
    if (numberString.length <= 2) {
        return numberString;
    }

    return numberString.slice(-2);
}


function leapYearOrCommon(year) {
    const lastTwoDigts = getTwoLastDigits(year);
    
    if (lastTwoDigts == '00' && year % 400 === 0) {
        console.log(`O Ano de ${year} é bissexto!`);
    } else if (lastTwoDigts != '00' && year % 4 === 0) {
        console.log(`O Ano de ${year} é bissexto!`);
    } else {
        console.log(`O Ano de ${year} não é bissexto!`);
    }
};

leapYearOrCommon(2024);
