// // Manipulando Prototypes
// // new Object -> Object.prototype
// const objA = {
//     chaveA: 'A'
//     // __proto__ = Object.prototype, Só de criar um objeto isso ja acontece
// };


// const objB = {
//     chaveB: 'B'
//     // __proto__ = ObjA
// };


// const objC = new Object();
// objC.chaveC = 'C';

// Object.setPrototypeOf(objB, objA);
// Object.setPrototypeOf(objC, objB);
// console.log(objC.chaveB);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(desconto) {
    this.preco = this.preco - (this.preco * (desconto / 100));
};

Produto.prototype.aumento = function(desconto) {
    this.preco = this.preco + (this.preco * (desconto / 100));
};


const p1 = new Produto('Camiseta', 50);

// Literal 
const p2 = {
    nome: 'Caneca',
    preco: 15
};

Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(10);

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 113
    },
    tamanho: {writable: true,
        configurable: true,
        enumerable: true,
        value: 42}
});
p3.aumento(10);
console.log(p3);