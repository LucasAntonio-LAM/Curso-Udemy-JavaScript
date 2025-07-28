// Arrays tbm são indexados porém diferente dos strings
//                0        1        2        3        4
const alunos = ['Luiz', 'Maria', 'João']; // Array

console.log(typeof alunos);
console.log(alunos instanceof Array); // Para ver se alunos é uma instancia de Array

// alunos.push('Luiza');
// alunos.push('Eduardo');
// console.log(alunos.slice(0, -2)); // Ultimo elemento não é incluido, Negativo

// console.log(alunos[50]); // Não existe, valor undefined

// delete alunos[1]; // Remove o elemento porém o indice continua o mesmo para os itens
// console.log(alunos);

// const removido = alunos.shift(); // Removendo o primeiro elemento do array tbm pode ser salvo em uma variavel 
// const removido = alunos.pop(); // Removendo o ultimo elemento do array e pode salvar o removido em uma variavel
// console.log(removido);
// console.log(alunos);

// alunos.unshift('Luiza'); // Adiciona no começo
// alunos.unshift('Fábio'); 

// alunos.push('Luiza'); // Forma mais simples de colocar novos itens no array / Adiciona no FIM
// alunos.push('Fabio');

// alunos[alunos.length] = 'Luiza'; // Adicionar itens ao array / Adiciona no FIM
// alunos[alunos.length] = 'Fabio';
// alunos[alunos.length] = 'Luana';

// alunos[0] = 'Eduardo'; // Altera o item
// alunos[3] = 'Luiza'; // Adiciona o item porem tendo que saber o tamanho do array
// console.log(alunos);

// console.log(alunos);
// console.log(alunos[0]);
// console.log(alunos[2]);