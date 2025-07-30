/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)

// Já vi
Object.keys (retorna as chaves)
Object.freeze (congela o objeto, não é possivel modifica-lo)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

// const produto = {nome: 'Caneca', preco: 1.8};
// const outraCoisa = Object.assign({}, produto, {material: 'Porcelana'}); // Assign copia e pode criar novos objetos.

// outraCoisa.nome = 'Xicara';
// outraCoisa.preco = 2.5;
// console.log(produto);
// console.log(outraCoisa);


// const produto = {nome: 'Caneca', preco: 1.8};
// Object.freeze(produto); // Congela o objeto
// const outraCoisa = Object.assign({}, produto, {material: 'Porcelana'});
// console.log(Object.keys(outraCoisa)); // Ve as chaves do objeto


// const produto = {nome: 'Caneca', preco: 1.8};
// Object.defineProperty(produto, 'nome', {
//     writable: false,
//     enumerable: false,
//     configurable: false
// });
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); // Saber as propriedades que estão configuradas na chave.


const produto = {nome: 'Caneca', preco: 1.8};
// console.log(Object.values(produto)); // Somente mostra os valores das chaves.
// console.log(Object.entries(produto)); // Ve os dois juntos, chaves e valores dentro dos respectivos arrays

for (let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}