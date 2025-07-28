let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
let varEx;

/* varEx = varA;
varA = varB;
varB = varC;
varC = varEx; */

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);
