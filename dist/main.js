"use strict";

var alunos = ['Borges', 'Genoveva', 'Deocléssio', 'Ana', 'Lucas', 'Fernanda'];
var notas = [6, 8, 4, 10, 6, 5];
var alunos2 = alunos.map(function (nome, indice) {
  return {
    nome: nome,
    nota: notas[indice]
  };
});
var alunosAprovados = alunos2.filter(function (aluno) {
  return aluno.nota >= 6;
});
console.log(alunosAprovados);