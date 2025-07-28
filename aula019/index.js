/* Tipos de dados Primitivos(Imutáveis) - Não pode ser modificado - Valor - Copiados
    - String
    - Number
    - Boolean
    - Undefined
    - Null
    - Bigint
    - Symbol

  Referência (Mútavel) - Pode ser Modificado - Passados por referência
    - Array
    - Object
    - Function
*/

const a = {
    nome: 'Lucas',
    sobrenome: 'Antonio'
};

const b = a;
// const b = {...a}; // Spread - Copia da variavel A
a.nome = 'João';
console.log(b);

// let a = [1,2,3];
// let b = [...a]; // Não é COPIA, B aponta para o mesmo local que A na memória, se alterado modifica os dois
// // let b = [...a]; // Copiando um dado mútavel, B fica completamente independente
// let c = b;
// console.log(a, b);

// a.push(4);
// console.log(a, b);

// b.pop();
// console.log(a, b);

// a.push('Lucas');
// console.log(c);

// let a = 'A';
// let b = a; // Cópia
// console.log(a, b);

// a = 'Outra Coisa';
// console.log(a, b);