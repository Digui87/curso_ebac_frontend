const form = document.getElementById('form-numero');
//const numero1 = document.getElementById('numero1');
//const numero2 = document.getElementById('numero2');

let formValid = false;

function numeroValido (valA, valB) {
    return valB > valA;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let valA = parseFloat(document.getElementById('valor-a').value);
    let valB = parseFloat(document.getElementById('valor-b').value);

    const mensagemSucesso = 'Formulário enviado com sucesso! Verificando: Valor A menor que Valor B!';
    const containerMensagemSucesso = document.querySelector('.success-message');

    formValid = numeroValido(valA, valB);

    if (formValid) {
        document.querySelector('.error-message').style.display = 'none';
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';

        valA.value = '';
        valB.value = '';
    } else {
        document.querySelector('.error-message').style.display = 'block';
        containerMensagemSucesso.style.display = 'none';
    }
})