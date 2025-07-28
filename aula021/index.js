/* Operadores de comparação  - Sempre vai retornar um valor boolean
    - > Maior 
    - >= Maior que ou igual a
    - < Menor que
    - <= Menor que ou igual a
    - == Igualdade (Valor) *** Não recomendavel
    - === Igualdade Estrita (Valor e tipo)
    - != Diferente (Valor) *** Não recomendavel
    - !== Diferente estrito (Valor e tipo)
*/

const comp = 10 > 11; 
console.log(comp);

const comp1 = 10 >= 11; 
console.log(comp1);

const comp2 = 10 < 11; 
console.log(comp2);

const comp3 = 12 <= 11; 
console.log(comp3);

const num1 = 10;
const num2 = 11;
const comp4 = num1 < num2;
console.log(comp4);

const num3 = 10; // Number
const num4 = '10'; // String - Conversão de tipo
const comp5 = num3 == num4;
console.log(comp5);

const num5 = 10;
const num6 = '10'; 
const comp6 = num5 === num6;
console.log(comp6);

const num7 = 10;
const num8 = '10'; 
const comp7 = num7 != num8;
console.log(comp7);

const num9 = 10;
const num10 = '10'; 
const comp8 = num9 !== num10;
console.log(comp8);