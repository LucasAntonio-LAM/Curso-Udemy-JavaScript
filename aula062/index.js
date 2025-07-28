// Valor por referencia
//const nomes = ['Eduardo', 'Maria', 'Joana'];

const nomes = [ 'Lucas', 'Antonio', 'Nascimento' ];
const nome = nomes.join(' '); // Retornar o array para string, também utilizando o espaço, também pode ser usados outros parametros para separar o array em string
console.log(nome);

// const nome = 'Lucas, Antonio, Nascimento';
// const nomes = nome.split(' '); // Dividir uma string em array utilizando o espaço da string ou vírgula ou qualquer outro parametro
// console.log(nomes);

// const nomes = new Array('Eduardo', 'Maria', 'Joana', 'Wallace','Marcos');
// const novo = nomes.slice(1, -1); // Pega somente oq estiver dentro dos indices 1 e 3 ou seja Maria e Joana ou para ser mais facil usar o primeiro numero positivo para pegar a ponta da esquerda e utilizar um numero negativo para excluir os da ponta direita 1 para começar na maria e -1 para remover o marcos
// console.log(novo);


// nomes.unshift('Lucas'); // Adiciona o item no começo do array porém muda todos os indices para adaptar esses que foram colocados no começo
// nomes.unshift('Marcos');
// nomes.push('João'); // Adiciona mais um item ao array e um novo indice
// nomes.push('Wallace');
// nomes.push('Pedro');
// console.log(nomes);

// const removido2 = nomes.shift(); // Remove o primeiro do array e retorna o valor dele para a const removido2
// console.log(nomes, removido2);


// const removido = nomes.pop(); // Remove o ultimo indice e retorna o valor dele para a const removido
// console.log(removido, nomes);

// nomes[2] = 'João'; // Alterar um nome pelo índice
// delete nomes[2]; // Deleta um nome pelo array, porém não perde os indices

// const novoArray = [...nomes]; // Operador spread, pega todos os valores do array e espalha dentro desse novo array
// const novo = nomes;
// novo.pop(); // Valor passado por referencia, oq for modificado em novo sera em nomes e vice-versa
// console.log(nomes);
// console.log(novoArray);
// console.log(nomes.length);