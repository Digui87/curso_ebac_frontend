/*const form = document.getElementById('form-tarefas');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaTarefa();
    atualizaLista();
})

function adicionaTarefa() {
    const inputNomeTarefa = document.getElementById('nome-tarefa');


    let linha = '<ul>';
    linha += `<li>${inputNomeTarefa.value}</li>`;
    linha += '</ul>';

    linhas += linha;

    const corpoLista = document.querySelector('ul');
    corpoLista.innerHTML = linhas;
    inputNomeTarefa.value = '';
}
    function atualizaLista() {
        const listaTarefa = document.querySelector('ul');
        listaTarefa.innerHTML = linhas;
    }
})*/

$(document).ready(function() {
    let linhas = '';

    $('#form-tarefas').submit(function(e) {
        e.preventDefault();
        adicionaTarefa();
        atualizaLista();
    });

    function adicionaTarefa() {
        const inputNomeTarefa = $('#nome-tarefa');

        let linha = '<ul>';
        linha += `<li>${inputNomeTarefa.val()}</li>`;
        linha += '</ul>';

        linhas += linha;

        const corpoLista = $('ul');
        corpoLista.html(linhas);
        inputNomeTarefa.val('');
    }

    function atualizaLista() {
        const listaTarefa = $('ul');
        listaTarefa.html(linhas);
        $('li').click(function() {
            $(this).addClass("finalizada");
    })}
});