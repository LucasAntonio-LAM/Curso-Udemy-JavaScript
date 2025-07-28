// Dados primitivos
// String, number, undefined, null, boolean(Valor Lógico), symbol

const nome = 'Lucas'; // Strings
const nome1 = "Lucas"; // Strings
const nome3 = `Lucas`; // Template Strings

const num = 10; // Number
const num2 = 10.52; // Number

let nomeAluno; // Undefined(Indefinido) = Não aponta para local nenhum na memória
const sobrenomeAluno = null; // Nulo = Não aponta para local nenhum na memória  

const aprovado = true; //  Boolean = True, false (Lógico), Mudar fluxo da aplicação
const aprovadof = false; // Falso

const a = [1, 2]; // Ambos apontam pro mesmo local da memória, dados por referência
const b = a;  

console.log(a, b);
b.push(3);
console.log(a, b);

let a1 = 2; 
const b1 = a1;
console.log(a1, b1) // 2 2

a1 = 3
console.log(a1, b1); // 3 2

console.log(typeof a, a);