// function criaCalculadora() {
//     return {
//         display: document.querySelector('.display'),

//         inicia() {
//             this.cliqueBotoes();
//             this.pressionaEnter();
//             this.pressBackspace();
//         },

//         pressBackspace() {
//             this.display.addEventListener('keypress', (e) => {
//                 if(e.keyCode === 8) {
//                     this.deleteUm();
//                 }
//             });
//         },

//         pressionaEnter() {
//             this.display.addEventListener('keyup', (e) => {
//                 if(e.keyCode === 13) {
//                     this.realizaConta();
//                 }
//             });
//         },
        
//         clearDisplay() {
//             this.display.value = '';
//         },

//         deleteUm() {
//             this.display.value = this.display.value.slice(0, -1);
//         },

//         realizaConta() {
//             let conta = this.display.value;
             
//             try {
//                 conta = eval(conta);

//                 if(!conta) {
//                     alert('Conta invalida');
//                     this.clearDisplay();
//                     return;
//                 }

//                 this.display.value = String(conta);
//             } catch(e) {
//                 alert('Conta invalida');
//                 this.clearDisplay();
//                 return;
//             }
//         },

//         cliqueBotoes() {
//             // This -> Calculadora
//             document.addEventListener('click', (e) => { // This = Document, quem chama a função é o document não mais a calculadora
//                 const el = e.target;

//                 if(el.classList.contains('btn-num')) {
//                     this.btnParaDisplay(el.innerText); // Pega o innerText dos botões do HTML e lança o parametro para a função btnParaDisplay
//                 }

//                 if(el.classList.contains('btn-clear')) {
//                     this.clearDisplay();
//                 }

//                 if(el.classList.contains('btn-del')) {
//                     this.deleteUm();
//                 }

//                 if(el.classList.contains('btn-eq')) {
//                     this.realizaConta();
//                 }

//                 this.display.focus();
//             }); // Indica para função usar o this que chamou a função e não o this dela
//         },

//         btnParaDisplay(valor) {
//             this.display.value += valor; // Concatena oq tiver no display dele + valor da variavel que veio de cliqueBotoes
//         },
    
//     };
// }


// const calculadora = criaCalculadora();
// calculadora.inicia(); // Calculadora chamando a função inicia, que a função inicia chama a função cliqueBotoes

function Calculadora() {
    const display = document.querySelector('.display');

    this.inicia = function() {
        this.cliqueBotoes();
        this.pressionaEnter();
        this.pressBackspace();
    };

    this.pressBackspace = function() {
        display.addEventListener('keypress', function(e) {
            if(e.keyCode === 8) {
                this.deleteUm();
            }
        });
    };

    this.pressionaEnter = function() {
        display.addEventListener('keyup', function(e) {
            if(e.keyCode === 13) {
                this.realizaConta();
            }
        });
    };

    this.clearDisplay = function() {
        display.value = '';
    };

    this.deleteUm = function() {
        this.display.value = this.display.value.slice(0, -1);
    };


    this.realizaConta = function() {
        let conta = display.value;

        try {
            conta = eval(conta);

            if(conta == null) {
                alert('Conta invalida');
                this.clearDisplay();
                return;
            }

            display.value = String(conta);
        } catch(e) {
            alert('Conta Invalida');
            this.clearDisplay();
            return;
        }
    };

    this.cliqueBotoes = function() {
        document.addEventListener('click', e => {
            
            const el = e.target;


            if(el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText);
            };

            if(el.classList.contains('btn-clear')) {
                this.clearDisplay();
            };

            if(el.classList.contains('btn-del')) {
                this.deleteUm();
            };

            if(el.classList.contains('btn-eq')) {
                this.realizaConta();
            };

            display.focus();
        })
    };

    this.btnParaDisplay = (valor) => {
        display.value += valor;
    };

}

const calculadora = new Calculadora();
calculadora.inicia();