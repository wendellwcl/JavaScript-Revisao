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