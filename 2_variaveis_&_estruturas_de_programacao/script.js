/*variáveis*/
const nome = "Wendell";
let idade = 19;
var numero = 21;

/*Estruturas condicionais*/
//if/else
if(1 > 2){
    console.log('condição 1');
} else if(1 == 2){
    console.log('condição 2');
} else{
    console.log('condição default');
};

//operador ternário
1 > 2 ? 'condição 1' : 'condição 2';

/*Estruturas de repetição*/
//while
let num1 = 0;
while(num1 < 5){
    num1++;
    console.log(num1);
};

//do...while
let num2 = 5;
do{
    console.log(num2);
    num2--;
} while(num2 > 0);

//for
for(let num3 = 0; num3 < 10; num3 += 2){
    console.log(num3);
};

/*
break - termina por completo o loop de repetição.
continue - termina a atual iteração que o loop se encontra, e retoma a partir da próxima iteração.
*/