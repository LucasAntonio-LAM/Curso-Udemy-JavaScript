/*
### 4. Cálculo de Troco em Reais

*Descrição*
Dado o valor da compra e o valor pago, mostre a quantidade mínima de cédulas e moedas necessárias (R\$ 100, 50, 20, 10, 5, 2, 1, 0.50, 0.25, 0.10, 0.05, 0.01).

*Entrada*
27.35 50.00

*Saída (exemplo)*


1 nota(s) de R$ 20
1 nota(s) de R$ 2
0 nota(s) de R$ 1
1 moeda(s) de R$ 0.50
0 moeda(s) de R$ 0.25
1 moeda(s) de R$ 0.10
0 moeda(s) de R$ 0.05
1 moeda(s) de R$ 0.01
---

 */

const change = totalChange(27.35, 50.00);
let changeCents = changeToCents(change);
const banknotes = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 25, 10, 5, 1];
const valueNames = ["100.00", "50.00", "20.00", "10.00", "5.00", "2.00", "1.00", "0.50", "0.25", "0.10", "0.05", "0.01"];

function totalChange(purchaseValue, amountPaid) {
    const change = amountPaid - purchaseValue;
    return change;
};

function changeToCents(change) {
    const changeCents = change * 100;
    return changeCents;
};

for (let i = 0; i < banknotes.length; i++) {
    const valueNow = banknotes[i];
    const howManyBankNotesFits = Math.floor(changeCents/valueNow);
    
    changeCents = changeCents % valueNow;

    if(howManyBankNotesFits >= 0) {
        const type = valueNow >= 100 ? 'nota(s)' : 'moeda(s)';
        const name = valueNames[i];

        const line = `${howManyBankNotesFits} ${type} de R$ ${name}`;

        console.log(line);
    }
    
}


