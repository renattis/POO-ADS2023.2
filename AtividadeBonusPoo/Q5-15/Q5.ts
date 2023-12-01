class Conta {
  private _numero: string;
  private _saldo: number;
  private contas: Conta[] = [];


  constructor(numero: string, saldoInicial: number) {
    this._numero = numero;
    this._saldo = saldoInicial;
  }

  get saldo(): number {
    return this._saldo;
  }

  sacar(valor: number): void {
    if (valor > this._saldo) {
      throw new Error('Saldo insuficiente para realizar o saque.');
    }

    this._saldo -= valor;
  }

  transferir(destino: Conta, valor: number): void {
    if (valor > this._saldo) {
      console.error('Erro ao transferir: Saldo insuficiente na conta de origem.');
      return;
    }

    this.sacar(valor);
    destino.depositar(valor);
  }

  depositar(valor: number): void {
    this._saldo += valor;
  }
}

  adicionarConta(conta: Conta): void {
    this.contas.push(conta);
  }

  transferirEntreContas(contaOrigem: Conta, contaDestino: Conta, valor: number): void {
    try {
      contaOrigem.transferir(contaDestino, valor);
      console.log('Transferência bem-sucedida.');
    } catch (error) {
      console.error('Erro durante a transferência:', error.message);
    }
  }
}

//teste 

const banco = new Banco();

const contaOrigem = new Conta('123', 500);
const contaDestino = new Conta('456', 1000);

banco.adicionarConta(contaOrigem);
banco.adicionarConta(contaDestino);

console.log('Saldo da conta de origem:', contaOrigem.saldo);
console.log('Saldo da conta de destino:', contaDestino.saldo);

banco.transferirEntreContas(contaOrigem, contaDestino, 800);

console.log('Saldo da conta de origem após transferência:', contaOrigem.saldo);
console.log('Saldo da conta de destino após transferência:', contaDestino.saldo);


// A exceção é capturada no método transferirEntreContas, o que permite um controle mais granular sobre o fluxo do programa. Isso torna a implementação mais robusta, pois as exceções podem ser tratadas de maneira específica em diferentes partes do código. No entanto, a confiabilidade geral também dependerá da consistência e adequação do tratamento de exceções em todos os métodos envolvidos.
