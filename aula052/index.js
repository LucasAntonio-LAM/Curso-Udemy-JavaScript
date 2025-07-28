const nome = 'Lucas';

function falaNome() { // Se a função não achar a variavel no escopo dela, ela ira atras dela primeiro pelo pai dela, depois o pai do pai e assim por diante ate chegar ao escopo global.
    const nome = 'Otario'; // Achou a variavel dentro do escopo dela e executou.
    console.log(nome);
}

// Escopo lexico é caracterizado pela função saber onde foi declarada e seus vizinhos.

falaNome();
 
function usaFalaNome() { // Continua funcionando normalmente
    falaNome();
}
usaFalaNome();