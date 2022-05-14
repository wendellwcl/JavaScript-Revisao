/*use strict*/
//Deixa o JS mais rigoroso na hora de programar, alertando erros ocorridos, deve ser declarado no topo de arquivos ou funções

"use strict"    //declaração do Strict globalmente

function myFunction(){
    "use strict"    //declaração do Strict na função
    return "Hello World";
};


/*console.log()*/
//Método bastante utilizado durante o debug para exibir valores no console

console.log(myFunction());


/*debugger*/
//Funcionalidade que pausa a execução do código onde está inserida (breakpoint)

debugger;   //a execução do código irá pausar nesta linha
console.log('após breakpoint debugger 1');

debugger;   //a execução do código irá pausar novamente nesta linha
console.log('após breakpoint debugger 2');


/*try/catch*/
//o bloco try/catch tenta executar um código e, caso não consiga, retorna o erro gerado

try{
    let a = 1 + b;
} catch(erro){
    console.log(`Algo seu errado: ${erro} (catch)`);    //tratamento do erro
} finally{
    console.log('execução finalizada (finally)');     //finally é executado independentemente do resultado try/catch (não obrigatório)
};


/*Exception*/
//Funcionalidade para parar completamente a execução do código sob alguma condição

function saudacao(nome){
    if(typeof nome != 'string'){
        throw new Error('O formato do nome não é o correto');   //a execução do código irá parar nesta linha quando a condição for satisfeita
    } else{
        console.log(`Olá ${nome}`);
    };
};

saudacao('Wendell');
saudacao(19);