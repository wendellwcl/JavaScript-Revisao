/*Variaveis*/
//para evitar problemas de 'vazamento' de escopo foi criada a variavel let que, diferentemente da var, não sofre hoisting
let var1 = 'variavel let';
const const1 = 'constante';


/*Método .filter()*/
//é um método para filtrar dados baseado em alguma condição estabelecida, retornando um array com os elementos que atendem ao filtro
let arr = [1,2,3,4,5,6,7,8,9];
let filter = arr.filter((num)=>{
    if((num % 2) === 0){
        return num;
    };
});
console.log(filter);


/*Método .map()*/
//é um método que percorre um array e retorna um outro array de itens modificados pela lógica definida
let map = arr.map((num) => {
    return num*2;
});
console.log(map);


/*Template literals*/
//recurso que permite concatenar informações de foema mais simples
let nome = 'Wendell';
console.log(`Olá ${nome}`);     //`texto string ${variavel}`


/*Destructuring*/
//é um recurso utilizado em arrays e objetos para transformar os seus itens em variaveis

//array
let arrPessoas = ['José', 'João', 'Maria'];
let [pessoa1, , pessoa2] = arrPessoas;
console.log(pessoa1, pessoa2);

//objeto
let carro = {
    marca: 'Tesla',
    motor: 'elétrico',
    portas: 4
};
let {marca, motor: teslaMotor, portas: teslaPortas} = carro;
console.log(marca, teslaMotor, teslaPortas);


/*Rest / Spread*/

//rest - permite que uma função possa receber um número indefinido de parametros 
function rest(...parametros){
    console.log(parametros);
};
rest(1,2,3,4,5);

//spread - permite espalhar elementos em um local que possa receber multiplos argumentos
let spread1 = [1, 2, 3];
let spread2 = [...spread1, 4, 5];
console.log(spread2);