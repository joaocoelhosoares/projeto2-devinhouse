export class Colecao {
    id: number;
    nome: string;
    responsavel: string;
    estacao: string;
    marca: string;
    ano: number;
    orcamento: number;

    constructor(id: number, nome: string, responsavel: string, estacao: string, marca: string, ano: number, orcamento: number) {
        this.id = id;
        this.nome = nome;
        this.responsavel = responsavel;
        this.estacao = estacao;
        this.marca = marca;
        this.ano = ano;
        this.orcamento = orcamento;
    }

}
