/*Expressões regulares / Regex*/
//é uma forma de encontrar padrões em uma string


//Criando uma Regex
//há duas formas de se fazer

let regex1 = new RegExp('teste');
let regex2 = /'teste'/;

//após a definição utilizamos o método .test() para verificar se o padrão é retornado
console.log(regex1.test('ttttttesteeeeee'));
console.log(regex2.test('lskejgyzdkjfhba'));


/*Conjuntos*/
///podemos definir conjuntos de caracteres utilizando []
let regexConjunto = new RegExp('[12345]');
console.log(regexConjunto.test('2'));

//também podemos definir um intervalo utilizando -
let regexIntervalo = /[0-9]/;
console.log(regexIntervalo.test('5'));
console.log(regexIntervalo.test('a'));


/*Caracteres especiais*/
/*
\d - qualquer digito
\w - caractere alfanumerico
\s - caractere de espaço em branco
\D - caracteres que não são digitos
\W - caravtere não-alfanumerico
\S - caractere que não seja espaço em branco
.  - qualquer caractere, menos nova linha
*/
let regexCaracteresEspeciais1 = /\d\d\d\d/;    //4 caracteres de digito em sequencia
console.log(regexCaracteresEspeciais1.test('1919'));
console.log(regexCaracteresEspeciais1.test('19'));

let regexCaracteresEspeciais2 = /\w\w\w/;      //3 caracteres alfanumericos em sequencia
console.log(regexCaracteresEspeciais2.test('ola'));
console.log(regexCaracteresEspeciais2.test('oi'));


/*Operador de negação*/
//podemos definir conjuntos que aceitam tudo exceto os caracteres definidos como negados pelo ^
let regexNegacao = new RegExp('[^987]');
console.log(regexNegacao.test('1'));
console.log(regexNegacao.test('9'));


/*Operador plus*/
//indica que um elemento poderá se repetir mais de uma vez
let regexPlus = /\d+/;     //neste caso um ou mais digitos
console.log(regexPlus.test('1231321'));


/*Operador question*/
//indica que o elemento anterior a ele é opcional
let regexQuestion = /abc\d?/;      //neste caso o digito é opcional
console.log(regexQuestion.test('abc'));


/*Ocorrencia precisa*/
//podemos indicar o numero de caracteres aceitos entre {}
let regexPrecisa = /\d{4,5}-\d{4}/;     //neste caso espera-se 4 ou 5 digitos antes do - e mais 4 digitos após
console.log(regexPrecisa.test('4002-8922'));
console.log(regexPrecisa.test('40002-8922'));
console.log(regexPrecisa.test('4000-892'));


/*Método .exec()*/
//este método retorna um objeto com algumas informações sobre a regex
console.log(/\d+/.exec('numero 100'));
console.log(/\d+/.exec('numero'));


/*Método match*/
//semelhante ao .exec() porém possui uma abordagem diferente
let testeMatch = 'numero 100'.match(/\d+/);
console.log(testeMatch);


/*Choice pattern*/
//instrução que funciona como método OU, definida da seguinte forma: (opção1|opção2|...)
let regexOu = /\d+ (maçãs|bananas|laranjas)/;
console.log(regexOu.test('10 maçãs'));
console.log(regexOu.test('10 peras'));


/*Exemplos*/
//dominio
const dominio = /[www.]?\w+\.com|.com.br/;
console.log(dominio.test('www.google.com'));
console.log(dominio.test('google.com'));

//e-mail
let email = /\w+@\w+\.\w+/
console.log(email.test('wendell@gmail.com'));