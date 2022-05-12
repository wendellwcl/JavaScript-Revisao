/*Classes*/

/*Classes no ES6*/

class Pessoa {
    //propriedades
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    };
    //métodos
    falar(){
        console.log(`Eu sou o ${this.nome}`);
    };
    //getter
    get getNome(){
        console.log(this.nome);
    };
    //setter
    set setNome(novoNome){
        this.nome = novoNome;
    };
};

let pessoa = new Pessoa('José', 21);
console.log(pessoa);
pessoa.falar();
pessoa.getNome;
pessoa.setNome = 'Robson';
pessoa.getNome;
console.log(pessoa);

//Herança
class NovaPessoa extends Pessoa {
    constructor(nome, idade, nacionalidade){
        super(nome, idade)
        this.nacionalidade = nacionalidade;
    };
};

let novaPessoa = new NovaPessoa('Matheus', 23, 'brasileiro');
console.log(novaPessoa);
novaPessoa.falar();

//Verificar se um objeto é instancia de outro
console.log(new NovaPessoa instanceof Pessoa);


//Definindo um valor padrão para propriedade do objeto após a classe ter sido instanciada
Pessoa.prototype.nome = "Wendell";
console.log(Pessoa.prototype.nome);

/*Classes nas versoes anteriores*/

//Instanciando classe por new
function Pessoa1(nome, idade){
    this.nome = nome;
    this.idade = idade;
    this.falar = ()=>{
        console.log(`Eu sou a ${this.nome}`);
    };
};

let pessoa1 = new Pessoa1('Maria', 19);
console.log(pessoa1);
pessoa1.falar();

//Instanciando classe por função
function criarPessoa(nome, idade){
    let pessoa = Object.create({});
    pessoa.nome = nome;
    pessoa.idade = idade;
    pessoa.falar = ()=>{
        console.log(`Eu sou o ${pessoa.nome}`);
    };
    return pessoa;
};

let pessoa2 = criarPessoa('João', 20);
console.log(pessoa2);
pessoa2.falar();