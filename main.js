function Celular(fabricante, modelo, memoria, camera) {
    this.fabricante = fabricante;
    this.modelo = modelo;
    this.memoria = memoria;
    this.camera = camera;
}

const celular1 = new Celular("Samsung", "S23", "128GB", "50MP");
const celular2 = new Celular("Apple", "iPhone 14", "128GB", "12MP");
const celular3 = new Celular("Xiaomi", "12T", "256GB", "108MP");

console.log(celular1);
console.log(celular2);
console.log(celular3);

const nome = "Diagnas"
const idade = 36
const ehMaiorDeIdade = true
const cursando = ["Full Stack Python"]

const nome2 = "Borges"
const idade2 = 22
const ehMaiorDeIdade2 = true
const cursando2 = ["Front End"]

const nome3 = "Enzo"
const idade3 = 16
const ehMaiorDeIdade3 = false
const cursando3 = ["UX/UI"]

const pessoa = {
    nome: nome,
    idade: idade,
    ehMaiorDeIdade: ehMaiorDeIdade,
    cursando: cursando,
}

const pessoa2 = {
    nome: nome2,
    idade: idade2,
    ehMaiorDeIdade: ehMaiorDeIdade2,
    cursando: cursando2,
}

const pessoa3 = {
    nome: nome3,
    idade: idade3,
    ehMaiorDeIdade: ehMaiorDeIdade3,
    cursando: cursando3,
}

function exibeAtributo(nomeAtributo) {
    console.log(pessoa[nomeAtributo]);
}

exibeAtributo('nome');
pessoa['celular'] = celular1;

exibeAtributo('nome');
pessoa2['celular'] = celular3;

exibeAtributo('nome');
pessoa3['celular'] = celular2;

console.log(pessoa);
console.log(pessoa2);
console.log(pessoa3);