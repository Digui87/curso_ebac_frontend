function calculaArea(base: number, altura: number): number {
    return base * altura;
}

class Pessoa {
    nome: string;
    sobrenome: string;

    constructor(nome: string, sobrenome: string) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    dizOla(): string {
        return `Olá ${this.nome}`;
    }
}