const alunos = ['Borges', 'Genoveva', 'Deocléssio', 'Ana', 'Lucas', 'Fernanda'];
const notas = [6, 8, 4, 10, 6, 5];

const alunos2 = alunos.map(function(nome, indice) {
    return {
        nome: nome,
        nota: notas[indice]
    }
})

const alunosAprovados = alunos2.filter(aluno => aluno.nota >= 6);

console.log(alunosAprovados);