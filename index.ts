import { Cliente } from "./Cliente";
import { IConta } from "./IConta";
import { ContaCorrente } from "./ContaCorrente";
import { ContaPoupanca } from "./ContaPoupança";


const cl = new Cliente(
    "Josefino Fino",
    2,
    "Rua dos Farrapos 205",
    40028922,
    520,
)
let renda = cl.getRenda();
const cc = new ContaCorrente(
    45298,
    0,
    150,
    2,
)
if (renda <= 500) {
    console.log(`Você não possui renda suficiente para criar uma conta corrente`)
} else {
    console.log(`Criando....`)
    cc.cadastrar();
}
const cp = new ContaPoupanca(
    4522,
    0,
    0.15,
    150,
)




/*
cl.cadastrar();
cl.mostrar();*/