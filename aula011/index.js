// alert('Com a nossa mensagem.');
// Console = Objeto
// log = Metódo

// window.alert = Objeto e metódo
// window.confirm = Retorna um resultado boolean
// window.prompt = Pede para o usuário digitar alguma informação, tudo retornado por essa função vai ser string
/* Quando uma função esta dentro do objeto chama de metódo e quando esta fora é uma função */

let num1 = prompt('Digite um número: ');
let num2 = prompt('Digite outro número: ');
num1 = Number(num1);
num2 = Number(num2);
const resultado = num1 + num2;

alert(`O resultado da soma entre ${num1} e ${num2} foi de ${resultado}`);
// alert(`O Resultado da soma foi de ${num1 + num2}`)