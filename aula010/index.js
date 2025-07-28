/* Aritméticos 
   + Adição e Concatenação
   - Subtração
   / Divisão
   * Multiplicação
   ** Potenciação
   % Resto da divisão
*/

/* Precedência
    () Entre parenteses 
    ** Potenciação
    * / % Multiplacação, divisão e resto da divisão
    + - Mais e menos
*/

/* Operadores de atribuição */

/* ++ Incremento = Atribui o valor dela mais um 
Antes do código - Primeiro faz a conta e depois retorna o valor
Depois do código - Executa a ação primeiro depois faz o incremento do valor
*/

/* -- Decremento = Tira um do valor total dela  
Antes do código - Primeiro faz a conta e depois retorna o valor
Depois do código - Executa a ação primeiro e depois faz o incremento do valor
*/

let contador = 1;
console.log(contador++); // Incremento
console.log(contador);

let contador1 = 1;
console.log(++contador1); // Incremento
console.log(contador1);

let contador2 = 10;
console.log(--contador2); // Decremento
console.log(--contador2); 

const passo = 2;
let contador3 = 0;
contador3 = contador3 + passo; // Incremento pulando duas vezes ou qualquer número que for declarado
console.log(contador3);
contador3 = contador3 + passo;
console.log(contador3);
contador3 = contador3 + passo;
console.log(contador3);

let contador4 = 0;
contador4 += 2; // contador = contador + 2, Simplificando o código de cima, funciona com qualquer operador
contador4 += 2;
contador4 += 2;
console.log(contador4);

const num10 = 10;
const num20 = Number('5'); // Converte esse número para inteiro(parseInt), Converte esse número para números quebrados(parseFloat), Converte para Number e identifica sozinho(Number)
console.log(num10 + num20);
console.log(typeof num20);



// NaN = Not a Number