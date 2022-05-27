export class Modelo {

    id: number;
    nome: string;
    responsavel: string;
    tipoModelo: string;
    colecao: string;
    bordado: string;
    estampa: string;

    constructor(id: number, nome: string, responsavel: string, tipoModelo: string, colecao: string, bordado: string, estampa: string) {
        this.id = id;
        this.nome = nome;
        this.responsavel = responsavel;
        this.tipoModelo = tipoModelo;
        this.colecao = colecao;
        this.bordado = bordado;
        this.estampa = estampa;
    }


}
