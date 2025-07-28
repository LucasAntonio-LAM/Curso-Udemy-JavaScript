// Strings são indexadas, texto é iteravel,  cada caracter tem um índice.
let umaString = "Um \"texto\""; // Barra invertida ignora ás aspas, para usar barra invertida é so usar duas barras invertidas.
//                 01234567
let outroString = 'Um texto';

console.log(outroString.toLowerCase()); // Para deixar tudo minusculo
console.log(outroString.toUpperCase()); // Deixar tudo maisculo
console.log(outroString.split(' ', 1)); // Dividir a string
console.log(outroString.substring(outroString.length -5)); // Faz o mesmo do slice
console.log(outroString.slice(-3)); // Medido pelo tamanho total da string e subtraido.
console.log(outroString.slice(2, 6)); // Capturar uma string baseado no indice
console.log(outroString.length); // Ver o tamanho da string
console.log(outroString.replace('Um', 'Outra')); // Substituição de palavra, Pode usar expressões regulares, usando g eles substitui para todos
console.log(outroString.search(/x/)); // Parecido com o indexOf mas aceita expressões regulares
console.log(outroString.match(/[a-z]/g)); // Expressões regulares
console.log(outroString.lastIndexOf('m', 3)); // Procura a palavra no indice de trás para frente
console.log(outroString.indexOf('Um', 3)); // Procurar se tem a palavra Um no índice 3 ou posterior
console.log(outroString.indexOf('texto')); // Encontrar onde esta a palavra no índice
console.log(`${outroString} em um lindo dia`); // Outra forma de concatenação
console.log(outroString.concat(' em', ' um', ' lindo', ' dia')); // Concatenando valoers usando a função concat
console.log(outroString.charAt(6)); // Também exibir o caractere do indice do texto.
console.log(outroString[7]); // Exibir somente o caractere do indice 4.
console.log(umaString);