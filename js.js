var display = '';
var resultado;

function digitar (event) {
    display += event.target.innerHTML;
    atualizarTela();
}

function atualizarTela () {
    document.getElementsByName('display')[0].value = display;
}

function reset () {
    display = '';
   atualizarTela()
}

function calcula () {
    resultado = eval(display);
    document.getElementsByName('display')[0].value = resultado;
}