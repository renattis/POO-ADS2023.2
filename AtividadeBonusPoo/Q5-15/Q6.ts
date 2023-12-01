class Conta {
  private _numero: string;
  private _saldo: number;
  private contas: Conta[] = [];

  constructor(numero: string, saldoInicial: number) {
    if (saldoInicial < 0) {
      throw new Error('Saldo inicial não pode ser negativo.');
    }
    this._numero = numero;
    this._saldo = saldoInicial;
  }

  get saldo(): number {
    return this._saldo;
  }

  sacar(valor: number): void {
    if (valor < 0) {
      throw new Error('Valor de saque não pode ser negativo.');
    }
    if (valor > this._saldo) {
      throw new Error('Saldo insuficiente para realizar o saque.');
    }
    this._saldo -= valor;
  }

  transferir(destino: Conta, valor: number): void {
    if (valor < 0) {
      throw new Error('Valor de transferência não pode ser negativo.');
    }
    if (valor > this._saldo) {
      console.error('Erro ao transferir: Saldo insuficiente na conta de origem.');
      return;
    }

    this.sacar(valor);
    destino.depositar(valor);
  }

  depositar(valor: number): void {
    if (valor < 0) {
      throw new Error('Valor de depósito não pode ser negativo.');
    }
    this._saldo += valor;
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

// Testes
const contaOrigem = new Conta('123', 500);
const contaDestino = new Conta('456', 1000);

console.log('Saldo da conta de origem:', contaOrigem.saldo);
console.log('Saldo da conta de destino:', contaDestino.saldo);

// Teste de transferência bem-sucedida
contaOrigem.transferir(contaDestino, 200);
console.log('Saldo da conta de origem após transferência:', contaOrigem.saldo);
console.log('Saldo da conta de destino após transferência:', contaDestino.saldo);

// Teste de transferência com valor negativo
try {
  contaOrigem.transferir(contaDestino, -50);
  console.log('Transferência bem-sucedida.');
} catch (error) {
  console.error('Erro durante a transferência:', error.message);
}

// Teste de saque com valor negativo
try {
  contaOrigem.sacar(-50);
  console.log('Saque bem-sucedido.');
} catch (error) {
  console.error('Erro durante o saque:', error.message);
}

// Teste de depósito com valor negativo
try {
  contaOrigem.depositar(-50);
  console.log('Depósito bem-sucedido.');
} catch (error) {
  console.error('Erro durante o depósito:', error.message);
}
