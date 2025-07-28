/* Operadores Lógicos  - Checam mais de uma comparação
    - && - AND - E - false && true = false "o valor mesmo"
    - || - OR - OU - true || false = vai retornar "o valor verdadeiro"
    - ! - NOT - NÃO - Nega uma expressão e inverte o valor, se a expressão for false ele retorna true, se for true ele retorna false.

    FalsyValue
    False - Valor literal falso
    0 - Valor falso
    '' "" `` - String Vazia
    null / undefined = Valor Falso
    NaN = Falso
    Qualquer outro valor vai dar verdadeiro
*/

// function falaOi () {
//     return 'Oi';
// }

// const vaiExecutar =  'Joãozinho';

// console.log(vaiExecutar && falaOi());

// const corUsuario = 'red';
// const corPadrao = corUsuario || 'black';

// console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false'; // Valor verdadeiro pois contem uma string com conteudo.
const d = false;
const e = NaN;

console.log(a || b || c || d || e);