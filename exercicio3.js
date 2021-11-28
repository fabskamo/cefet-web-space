// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

let botaoExpandirRetrair = document.querySelectorAll('button');

for (let b of botaoExpandirRetrair) {

    b.addEventListener('click', function() {
        if (b.innerHTML == '+') {
            b.innerHTML = '-';
            let pai = b.parentNode;
            pai.classList.add('expandido');
        } else {
            if (b.innerHTML == '-') {
                b.innerHTML = '+';
                let pai = b.parentNode;
                pai.classList.remove('expandido');
            }
        }
    });
}