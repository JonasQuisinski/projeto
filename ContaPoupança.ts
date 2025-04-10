import { IConta } from "./IConta";

export class ContaPoupanca implements IConta {
    conta: number;
    saldo: number;
    taxaJuros: number;
    donoId: number;

    constructor(conta: number, saldo: number, taxaJuros: number, donoId: number,
    ) {
        this.conta = conta;
        this.saldo = saldo;
        this.taxaJuros = taxaJuros;
        this.donoId = donoId;
    }

    cadastrar(): void {
        console.log(`
            Cadastrando Conta:
            Conta: ${this.conta}
            Saldo: ${this.saldo}
            id dono: ${this.donoId}
            `);
    }
    mostrar(): void {
        console.log(`Não esta pronto ainda`)
    }

}