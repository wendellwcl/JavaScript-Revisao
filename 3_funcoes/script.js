//Function defalut
function myFunction(){
    console.log("Hello World");
};

myFunction();


//Anonymous function
let soma = function(a, b){
    return a+b;
};

let resultado = soma(1,2);
console.log(resultado);


//Arrow function
let subtracao = (a,b) => {
    return a-b;
};

resultado = subtracao(2,1);
console.log(resultado);

//Arrow function ("resumida")
let saudacao = nome => console.log(`Olá ${nome}`);
saudacao("Wendell");


//Async Function
async function somar(a,b){
    return a+b;
};

somar(2,2)
    .then(resolve => console.log(resolve));

//await
//utilizando await é possivel esperar determinada lógica ser finalizada para dar prosseguimento ao código
function somaDelay(a,b){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(a+b);
        }, 3000);
    });
};

async function somar2(a,b,c){
    let x = somaDelay(a,b);
    let y = c;
    return await x + y;
};

somar2(1,2,3)
    .then(resolve => console.log(resolve));
    

//Promise
//função assincrona que pode produzir um valor em algum momento do código
let promessa = Promise.resolve(4+6);    //.resolve() é o método que resolve uma promise
promessa.then(value => value + 5)      //.then() é o método que a executa em um ponto futuro
    .then((value) => {console.log(`o valor é: ${value}`)})
    .catch(erro => console.log(erro));      //.catch() retem um erro, caso aconteça, e permite que seja tratado

//é possivel rejeitar uma promise caso atinja um resultado não satisfatorio
function verificarNumero(num){
    return new Promise((resolve, reject) => {
        if(num == 2){
            resolve(console.log(`o número é ${num}`));
        } else{
            reject(new Error('Erro'));
        };
    });
};
verificarNumero(2);
verificarNumero(3);

//Resolvendo varias promises
//com o método all podemos resolver varias promises de uma só vez
//devemos passar as promises por array, e assim que a ultima for resolvida recebemos a resposta
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3000);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(15);
    }, 2000);
});

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(5);
    }, 1000);
});

Promise.all([p1, p2, p3])
    .then(values => console.log(values));