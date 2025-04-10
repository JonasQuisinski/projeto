import { IConta } from "./IConta";

export class ContaCorrente implements IConta {
    conta: number;
    saldo: number;
    limite: number;
    donoId: number;

    constructor(conta: number, saldo: number, limite: number, donoId: number) {
        this.conta = conta;
        this.saldo = saldo;
        this.limite = limite;
        this.donoId=limite;
    }

    depositar(): void {
    }
    saque(): void {
    }
    transferencia(): void {
    }
    verificarSaldo(): void {
    }
    
    cadastrar(): void {
        console.log(`
            Cadastrando conta:
            Conta: ${this.conta}
            Saldo: ${this.saldo}
            Limite: ${this.limite}
            `);
    }

}