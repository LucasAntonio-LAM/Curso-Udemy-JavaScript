const num1 = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
const raizquadrada = Math.sqrt(num1);

numeroTitulo.innerHTML = num1;
texto.innerHTML = (`Raiz Quadrada: ${raizquadrada}.</br>`);
texto.innerHTML += (`${num1} é inteiro: ${Number.isInteger(num1)}</br>`);
texto.innerHTML += (`É NaN: ${Number.isNaN(num1)}</br>`);
texto.innerHTML += (`Arredondando para baixo: ${Math.floor(num1)}</br>`);
texto.innerHTML += (`Arredondando para cima: ${Math.ceil(num1)}</br>`);
texto.innerHTML += (`Com duas casas decimais: ${Number(num1).toFixed(2)}</br>`);
