class ContaBancaria {
    constructor(public titular: string, public saldo: number) { }

    exibirSaldo(): string {
        return `Titular: ${this.titular}, Saldo: R$${this.saldo.toFixed(2)}`;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(titular: string, saldo: number, public limiteCredito: number) {

        super(titular, saldo);
    }

    exibirSaldo(): string {
        const saldoTotal = this.saldo + this.limiteCredito;
        return `${super.exibirSaldo()}, Saldo Total com Crédito: R$${saldoTotal.toFixed(2)}`;

    }
}

const contaCorrenteExemplo = new ContaCorrente('Vinicius', 15000, 8000);
console.log(contaCorrenteExemplo.exibirSaldo());