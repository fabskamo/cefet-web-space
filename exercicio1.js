// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

let botaoCalcular = document.querySelector('#calcular');
let inputResultado = document.querySelector('#resultado');

let inputMassa1 = document.querySelector('#massa1');
let inputMassa2 = document.querySelector('#massa2');
let inputDist = document.querySelector('#distancia');
let inputCte = document.querySelector('#constante');

botaoCalcular.addEventListener('click', function() {

    let resultado = ((inputCte.value * inputMassa1.value * inputMassa2.value) / inputDist.value ** 2);
    inputResultado.value = resultado;
});