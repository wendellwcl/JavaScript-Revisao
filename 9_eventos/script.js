/*Criando eventos*/
let btn1 = document.querySelector('#btn1');
function clique(){
    alert('Click');
};
btn1.addEventListener('click', clique);


/*Removendo eventos*/
let btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', ()=>{
    btn1.removeEventListener('click', clique);
    alert('Evento do botão 1 removido');
});


/*Objeto do evento*/
let btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', (event)=>{
    console.log(event);
});


/*Propagação*/
//quando não se define muito bem o elemento ou ele está dentro de outro elemento que executa outro evento, pode acontecer a propagação, que é a duplicação de eventos, por isso há um método que resolve este problema .stopPropagation()
let propagacao = document.querySelector('#propagacao');
propagacao.addEventListener('click', ()=>{
    alert('Ocorreu propagação');
});
let btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', (event)=>{
    event.stopPropagation();
    alert('Sem Propagação');
});


/*Prevent default*/
//alguns elementos já possuem açoes pré-definidas, e podemos pará-las utilizando o .preventDefault()
let link = document.querySelector('a');
link.addEventListener('click', (event)=>{
    event.preventDefault();
    alert('Evento default não executado');
});


/*Eventos por clique do mouse*/
//click, dblclick, mousedown, mouseup / contextmenu (botão direito)
/*Eventos por movimento do mouse*/
//mousemove


/*Eventos por tecla*/
//sempre que uma tecla é pressionada são gerados dois eventos: keydown e keyup
window.addEventListener('keyup', (e)=>{
    let tecla = e.key.toUpperCase();
    alert(`tecla ${tecla}`);
});


/*Eventos por scroll*/
//scroll
window.addEventListener('scroll', (e)=>{
    console.log(`scroll ${window.pageYOffset}`);
});


/*Eventos por foco*/
//focus, blur


/*Eventos por carregamento*/
//load, beforeunload (antes que a página seja fechada)
window.addEventListener('beforeunload', (e)=>{
    e.returnValue = null;
});


/*Debounce*/
//um evento que dispara multiplas vezes seguidas pode ser um problema, para esses casos podemos fazer um debounce (suavizador)
let timeout;
window.addEventListener('mousemove', (e)=>{
    clearTimeout(timeout);
    timeout = setTimeout(()=>{
        console.log(`debounce - mouseX = ${e.clientX}`)
    }, 500);
});