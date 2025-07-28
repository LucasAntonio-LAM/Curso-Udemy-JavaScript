function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback) {
    setTimeout(function() {
        console.log('f1'); // Função de Callback
        if (callback) callback();
    }, rand())
}

function f2(callback) {
    setTimeout(function() {
        console.log('f2');
        if (callback) callback(); // Para verificar se tem algo dentro do callback, se não tiver ele simplesmente continua e se tiver ele executa o callback
    }, rand())
}

function f3(callback) {
    setTimeout(function() {
        console.log('f3');
        if (callback) callback();
    }, rand())
}

// f1(function() {
//     f2(function() { // Funcao de callback são chamadas quando queremos que uma função seja executada primeira que outras e para garantir isso, criamos essa aninhação de funções que só seram executadas uma apos a outra. Também podendo ser chamado de callback hell
//         f3(function() {
//             console.log('Olá Mundo!') 
//         });
//     });
// });


f1(f1CallBack); // Para não se tornar uma arvore de natal gigante e acabar deixando o codigo confuso, chama funções dentro do parametro do f1 que faz a mesma função de antes porém sem deixar o codigo bagunçado e confuso.

function f1CallBack() {
    f2(f2CallBack);
}

function f2CallBack() {
    f2(f3CallBack);
}

function f3CallBack() {
    console.log('Olá mundo!');
}