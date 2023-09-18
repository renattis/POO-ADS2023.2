class Banco {
    contas: Conta[] = [];

    inserir(conta: Conta): void {
        // Verificar se já existe uma conta com o mesmo número
        const contaExistente = this.consultar(conta.numero);
        if (!contaExistente) {
            this.contas.push(conta);
        } else {
            console.log(`Não foi possível inserir a conta ${conta.numero} - Já existe uma conta com esse número.`);
        }
    }

    sacar(numero: string, valor: number): void {
        const conta = this.consultar(numero);
        if (conta) {
            conta.sacar(valor);
        } else {
            console.log(`Conta ${numero} não encontrada.`);
        }
    }

    transferir(numeroCredito: string, numeroDebito: string, valor: number): void {
        const contaCredito = this.consultar(numeroCredito);
        const contaDebito = this.consultar(numeroDebito);

        if (contaCredito && contaDebito) {
            contaDebito.transferir(contaCredito, valor);
        } else {
            console.log(`Uma das contas não foi encontrada para a transferência.`);
        }
    }

    quantidadeDeContas(): number {
        return this.contas.length;
    }

    totalDinheiroDepositado(): number {
        return this.contas.reduce((total, conta) => total + conta.saldo, 0);
    }

    mediaSaldoDasContas(): number {
        if (this.contas.length === 0) {
            return 0;
        }
        return this.totalDinheiroDepositado() / this.contas.length;
    }

}
