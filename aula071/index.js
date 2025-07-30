// definePoperty - defineProperties
function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave
        value: estoque, // Mostra o valor que está na chave
        writable: false, // Se pode ser editada
        configurable: true // Pode apagar ou não a chave ou reconfigurar a chave
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
    });
}


const p1 = new Produto('Camiseta', 20, 3);

console.log((p1));

