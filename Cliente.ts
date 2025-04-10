import { ICliente } from "./ICliente";
export class Cliente implements ICliente {
    nome: string;
    id: number;
    endereco: string;
    telefone: number;
    renda: number;

    constructor(nome: string, id: number, endereco: string, telefone: number, renda: number) {
        this.nome = nome;
        this.id = id;
        this.endereco = endereco;
        this.telefone = telefone;
        this.renda = renda
    }
    getId(): number {
        return this.id;
    }
    getNome(): string {
        return this.nome;
    }
    getEndereco(): string {
        return this.endereco;
    }
    getTelefone(): number {
        return this.telefone;
    }
    getRenda(): number {
        return this.renda;
    }
    cadastrar(): void {
        console.log(`
            Cadastrando cliente:
            Nome: ${this.nome}
            Id: ${this.id}
            Endereço: ${this.endereco}
            Telefone: ${this.telefone}
            Renda: ${this.renda}
            `);
    }
    mostrar(): void {
        console.log(`Cliente:
            Nome: ${this.nome}
            Endereço: ${this.endereco}
            Telefone: ${this.telefone}
            Renda: ${this.renda}
            `)
    }


}
