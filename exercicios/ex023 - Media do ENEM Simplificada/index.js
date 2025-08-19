/*
---

### 7. Média Ponderada do ENEM Simplificada

*Descrição*
Leia cinco notas (Mat, L. Port, Ciênc Nat, Hum, Redação) e seus respectivos pesos (padrão MEC: 1, 1, 1, 1, 2) e devolva a média final.

*Entrada*
650 700 680 620 800

*Saída*
691.67

---
 */

function convertNumberToString(val1, val2, val3, val4, val5) {
    if(typeof val1, typeof val2, typeof val3, typeof val4, typeof val5 !== 'number') {
        console.log('Não é um número.');
        return;
    }
    
    const convertedStrings = [];
    for (const value of arguments) {
        convertedStrings.push(value.toString());
    }
    return convertedStrings;
}


function isAValidString(convertedStrings) {
    for (i = 0; i < convertedStrings.length; i++) {
        const actualString = convertedStrings[i];
        if (actualString.length > 3) {
            return;
        } else {
            return true;
        }
    }
}

function amount(val1, val2 , val3, val4, val5) {
    const amount = val1 * 1 + val2 * 1 + val3 * 1 + val4 * 1 + val5 * 2;
    return amount;
}

function enemNotes(val1, val2, val3, val4, val5) {
    if(isAValidString(convertNumberToString(val1, val2, val3, val4, val5)) === true) {
        const amount2 = amount(val1, val2, val3, val4, val5);
        const averageNotes = amount2 / 6;
        return averageNotes.toFixed(2);
    } else {
        console.log('ERROR');
    }
    
}



console.log(enemNotes(650, 700, 680, 620 , 800));




