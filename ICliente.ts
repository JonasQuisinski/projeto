export interface ICliente {
    nome: string;
    id: number;
    endereco: string;
    telefone: number;
    renda: number;
    cadastrar(): void;
    mostrar(): void;
}
