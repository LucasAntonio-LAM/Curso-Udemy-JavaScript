// Função MAP retorna os valores e pode modificar tbm os valores do array diferente de filter que somente filtra os valores
// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro);

// Para cada elemento
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
    { nome: 'Lucas', idade: 62},
    { nome: 'Maria', idade: 47},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47},
];

const onlyString = pessoas.map((obj) => `Nome: ${obj.nome}`);
const onlyAge = pessoas.map((obj) => ({ idade: obj.idade }));
const id = pessoas.map((obj, indice) => `ID ${indice} = ${obj.nome}, ${obj.idade} Anos`);

console.log(onlyString);
console.log(onlyAge);
console.log(id);
console.log(pessoas);