/*Array*/
let arr = [1,2,3,4,5,1];

/*Métodos importantes de array*/

//.push() - inserir elemento no fim do array
arr.push('elemento inserido ao fim');
console.log(arr);
//.pop() - remove e retorna o elemento no fim do array
let removido = arr.pop();
console.log(removido);
console.log(arr);
//.unshift() - inserir elemento no inicio do array
arr.unshift('elemento inserido ao inicio');
console.log(arr);
//.shift - remove e retorna o elemento no inicio do array
removido = arr.shift();
console.log(removido);
console.log(arr);

//.indexOf() - retorna o index da primeira ocorrência de determinada informação
console.log(arr.indexOf(1));
//.lastIndexOf() - retorna o index da ultima ocorrência de determinada informação
console.log(arr.lastIndexOf(1));

//.slice() - retorna um array a partir de outro, seguindo os parametros determinados e sem modifiar o array "original"
console.log(arr.slice(2,5));

//.forEach() - percorre o array e executa alguma lógica definida
arr.forEach(num => {
    console.log(num*2);
});

//.includes() - verifica se o array possui determinada informação
console.log(arr.includes(1));
console.log(arr.includes(9));

//.reverse() - retorna o array invertido
console.log(arr.reverse());

//Destructuring com array
let arr2 = [0,1,2,3,4,5];
let [num1, num2, ,num4] = arr2;
console.log(num1);
console.log(num2);
console.log(num4);


/*Objeto*/
let carro = {
    //propriedades
    marca: "VW",
    portas: 4,
    motor: 1.0,
    //métodos
    acelerar: function(velocidade){
        console.log(`acelerar até ${velocidade} Km/h`);
    },
    reduzir: (velocidade)=>{
        console.log(`reduzir até ${velocidade} Km/h`);
    }
};

//Deletar propriedade/método de um objeto
delete carro.motor;
//Adicionar propriedade/método a um objeto
carro.eletrico = false;
//Acessar objeto/propriedade
console.log(carro);
console.log(carro.marca);
//Executar método de um objeto
carro.acelerar(80);
carro.reduzir(50);
//Verificando keys de um objeto
console.log(Object.keys(carro));

//Copiando propriedades de um objeto para outro
let objA = {
    prop1: 'propriedade 1',
    prop2: 'propriedade 2'
};
let objB = {
    prop3: 'propriedade 3'
};

Object.assign(objA, objB);
console.log(objA);

//Destructuring com objeto
let pessoa = {
    nome: "José",
    sobrenome: "Silva",
    idade: 20
};
const {nome: nome, idade: idade} = pessoa;
console.log(nome);
console.log(idade);


/*JSON
JavaScript Object Notation*/
let pessoa2 = {
    'nome': 'Maria',
    'sobrenome': 'Ribeiro',
    'idade': 22
};

//JSON.stringfy() - converte um JSON para string
let pessoaString = JSON.stringify(pessoa2);
console.log(pessoaString);

//JSON.parse() - converte uma string para JSON
let pessoaJSON = JSON.parse(pessoaString);
console.log(pessoaJSON);