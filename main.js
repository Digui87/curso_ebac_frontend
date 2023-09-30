function Computador(processador, modelo, memoriaRAM, placaDeVideo) {
    this.processador = processador;
    this.modelo = modelo;
    this.memoriaRAM = memoriaRAM;
    this.placaDeVideo = placaDeVideo;
}

const computador1 = new Computador("Intel", "Core i9-13900K", "64GB DDR5", "RTX 4090 24GB");
const computador2 = new Computador("AMD", "Ryzen 9 5900X", "32GB DDR5", "RTX 4090");
const computador3 = new Computador("AMD", "Ryzen 5 5600G", "8GB DDR4", "Integrada ao processador");

console.log(computador1);
console.log(computador2);
console.log(computador3);

class Notebook extends Computador {
    constructor(processador, modelo, memoriaRAM, placaDeVideo, tamanhoDaTela) {
        super(processador, modelo, memoriaRAM, placaDeVideo);
        this.tamanhoDaTela = tamanhoDaTela;
    }
}

const notebook1 = ("Intel", "Core i7 11370H", "16GB DDR4", "GTX 1650 4GB", 15.6);
const notebook2 = ("Intel", "Core i5 13450HX", "8GB DDR5", "RTX 3050 6GB", 15.6);
const notebook3 = ("Intel", "Core i7 11800H", "16GB DDR4", "RTX 3070 8GB", 16);

console.log(notebook1);
console.log(notebook2);
console.log(notebook3);

class Tablet extends Computador {
    constructor(processador, modelo, memoriaRAM, placaDeVideo, camera) {
        super(processador, modelo, memoriaRAM, placaDeVideo);
        this.camera = camera;
    }
}

const tablet1 = ("Snapdragon", "8 Pus Gen 2", "8GB", "Adreno 740", "13MP");
const tablet2 = ("Apple", "M1", "8GB", "Apple GPU", "12MP");
const tablet3 = ("Cortex", "A55", "6GB", "Mali-G57", "8MP");

console.log(tablet1);
console.log(tablet2);
console.log(tablet3);

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
pessoa['computador'] = computador1;

exibeAtributo('nome');
pessoa2['computador'] = computador2;

exibeAtributo('nome');
pessoa3['computador'] = computador3;

console.log(pessoa);
console.log(pessoa2);
console.log(pessoa3);