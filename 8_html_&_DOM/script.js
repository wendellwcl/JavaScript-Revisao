/*Acessando elementos/tags*/
console.log(document.body);
console.log(document.body.childNodes);
console.log(document.body.childNodes[1]);


/*Selecionando elementos por tag*/
console.log(document.getElementsByTagName('h1'));
console.log(document.getElementsByTagName('p'));


/*Selecionando elementos por ID*/
console.log(document.getElementById('titulo'));


/*Selecionando elementos por classe*/
console.log(document.getElementsByClassName('paragrafo'));


/*Selecionando elementos por query*/
//funciona com base em seletores CSS
console.log(document.querySelector('.item-lista')); //classe
console.log(document.querySelectorAll('.item-lista')); //classe
console.log(document.querySelector('#titulo')); //ID
console.log(document.querySelector('div p')); //tag


/*Alterando o HTML*/

//criando um elemento
let novoElemento = document.createElement('p');

//Inserindo texto
let texto = document.createTextNode('Texto criado por .createTextNode()');
let ref4 = document.getElementById('sem-texto');
ref4.appendChild(texto);

//.insertBefore()
//insere um nó antes da referencia selecionada
let span1 = document.createElement('span'); //criando novo elemento
span1.innerText = '.insertBefore()' //adicionando conteudo ao elemento
let ref1 = document.querySelector('div .paragrafo'); //seleconando referencia
let refPai1 = ref1.parentNode; //selecionando elemento pai

refPai1.insertBefore(span1, ref1);

//.appendChild
//insere um nó ao fim da referencia selecionada
let span2 = document.createElement('span');
span2.innerText = '.appendChild()';
let ref2 = document.querySelector('div .paragrafo');
let refPai2 = ref2.parentNode;

refPai2.appendChild(span2);


//.replaceChild()
//substitui o elemento selecionado
let novoP = document.createElement('p');
novoP.innerText = 'Referencia - .replaceChild()';
let ref3 = document.querySelector('div p');
let refPai3 = ref3.parentNode;

refPai3.replaceChild(novoP, ref3);


/*Manipulando atributos*/
let url = document.querySelector('a');

url.setAttribute('href', 'https://www.google.com'); //.setAttribute() para definir um valor ao atributo
console.log(url.getAttribute('href')) //.getAttribute() para retornar o valor do atributo


/*Verificando largura e altura*/
let ref5 = document.querySelector('h1');
console.log(ref5.offsetWidth);
console.log(ref5.offsetHeight);
console.log(ref5.clientWidth); //desconsidera bordas
console.log(ref5.clientHeight); //desconsidera bordas

/*Verificando posição*/
console.log(ref5.getBoundingClientRect());

/*Alterando CSS*/
ref5.style.color = 'blue'
ref5.style.border = '1px solid black'