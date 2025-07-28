// Faça um programa que leia três números e exiba o maior entre eles.

function biggerNum(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        console.log(n1);
    } else if (n2 > n1 && n2 > n3) {
        console.log(n2);
    } else if (n3 > n2 && n3 > n1){
        console.log(n3);
    }
}

biggerNum(5,10,3);


function biggerNumMath(n1,n2,n3) {
    const maior = Math.max(n1,n2,n3);
    console.log(maior);
}

biggerNumMath(60,80,30);
