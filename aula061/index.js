// function* geradora1() {
//     // Código Qualquer ...
//     yield 'Valor1';
//     // Código Qualquer ...
//     yield 'Valor2';
//     // Código Qualquer ...
//     yield 'Valor3';
// }

// const g1 = geradora1();
// // console.log(g1.next().value); // Valor de yield
// // console.log(g1.next().value);
// // console.log(g1.next());
// // console.log(g1.next());

// for (let valor of g1) {
//     console.log(valor); // O let vai saber quando parar pq sabe quando a função para de ter valores.
// } 

// function* geradora2() {
//     let i = 0;
//     while(true) {  // Geradora infinita, enquanto for chamada vai continuar somando numeros
//         yield i;
//         i++;
//     }
// }

// const g2 = geradora2();
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);

// function* geradora3() {
//     yield 0;
//     yield 1;
//     yield 2; 
// }

// function* geradora4() { // Delegou parte de uma função gerador para outra função gerador atraves de chamar a função com yield*
//     yield* geradora3();
//     yield 3;
//     yield 4;
//     yield 5;
// }

// const g4 = geradora4();
// for (let valor of g4) {
//     console.log(valor);
// }

function* geradora5() {
    yield function() {
        console.log('Vim do y1'); // Uma função geradora tbm pode conter funções dentro que se chamam cada um na sequencia certa
    }

    yield function() {
        console.log('Vim do y2');
    }

    // ...

    yield function() {
        console.log('Vim do y3');
    }
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
const func3 = g5.next().value;
func1();
func2();
func3();