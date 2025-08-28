/*
---

### 10. Geração de Dígito Verificador de Código de Barras de Boleto (Módulo 11 simplificado)

*Descrição*
Implemente o cálculo do dígito verificador usando o peso 2-9 cíclico.

*Entrada*
Uma linha com 43 dígitos (linha digitável sem DV).

*Saída*
<dígito> (0-9 ou X se resultado = 10).

*/

const generatedNumber = randomDigits(43);
const totalSum = randomDigitsSum('6573979395700328701820486486321899654411983');
module11(totalSum);

function randomDigits(digitLength) {
    
    if (!digitLength || digitLength <= 0) {
        return "";
    }

    let results = '';

    const firstDigit = Math.floor(Math.random() * 9) + 1;
    results += firstDigit.toString();

    for(let i = 1; i < digitLength; i++) {
        const digit = Math.floor(Math.random() * 10);
        results += digit.toString();
    }

    return results;
}

function randomDigitsSum(randomDigits) {
    
    if(randomDigits.length !== 43) {
        return '';
    }

    let totalSum = 0;
    let weights = 2;

    for(i = 42; i >= 0; i--) {
        let digitNow = Number(randomDigits[i]);
        
        let multiplication = digitNow * weights;
        totalSum += multiplication;
        
        if (weights < 9) {
            weights++;
        } else {
            weights = 2;
        }
        
    }
    return totalSum;
}

function module11(totalSum) {
    const divisionRest = totalSum % 11;
    const checkerDigit = 11 - divisionRest;
    
    if (checkerDigit === 10) {
        console.log(`O Dígito verificador é: X`);
    } else if (checkerDigit === 0 || checkerDigit == 11) {
        console.log(`O Dígito verificador é: 0`);
    } else if (checkerDigit < 9 || checkerDigit === 1) {
        console.log(`O Dígito verificador é: ${checkerDigit}`);
    };
}



