/*
### 6. Identificador de Estado pelo DDD

*Descrição*
Receba o código DDD e mostre o estado correspondente (ex.: 21 → RJ). Inclua ao menos as capitais (11, 21, 31, 41, 51, 61, 71, 81, 91).

---
 */


function receiveDDD(ddd) {
    if(ddd === 11) {console.log(`o DDD ${ddd} é de São Paulo(SP)!}`);}
    if(ddd === 21) {console.log(`o DDD ${ddd} é de Rio de Janeiro(RJ)!}`);}
    if(ddd === 31) {console.log(`o DDD ${ddd} é de Belo Horizonte(BH)!}`);}
    if(ddd === 41) {console.log(`o DDD ${ddd} é de Curitiba(CWB)!}`);}
    if(ddd === 51) {console.log(`o DDD ${ddd} é de Porto Alegre(POA)!}`);}
    if(ddd === 61) {console.log(`o DDD ${ddd} é de Brasília(BSB)!}`);}
    if(ddd === 71) {console.log(`o DDD ${ddd} é de Salvador(SSA)!}`);}
    if(ddd === 81) {console.log(`o DDD ${ddd} é de Recife(PE)!}`);}
    if(ddd === 91) {console.log(`o DDD ${ddd} é de Belém(PA)!}`);}
}

receiveDDD(91);