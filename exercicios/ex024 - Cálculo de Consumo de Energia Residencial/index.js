/*
---

### 8. Cálculo de Consumo de Energia Residencial

*Descrição*
Receba leitura anterior e atual de kWh, e a tarifa (R\$/kWh). Informe o consumo e o valor a pagar.

*Entrada*
1530 1610 0.85

*Saída*


Consumo: 80 kWh
Valor: R$ 68.00


---
 */

function calculateConsumptionValue(lastR, actualR, tarif) {
    if (typeof lastR != 'number' || typeof actualR != 'number' || typeof tarif != 'number') {
        throw new TypeError("Leituras Inválidas, use um número.");
    }

    const consumption = lastR - actualR;
    const consumptionAsString = consumption.toString();
    const cleanConsumption = consumptionAsString.replace("-", "");
    const valueToPay = cleanConsumption * tarif;

    console.log(`Consumo: ${cleanConsumption} kWh`);
    console.log(`Valor: R$ ${valueToPay.toFixed(2)}`);
};

calculateConsumptionValue(1530, 1610, 0.85);