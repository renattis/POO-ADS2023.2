///Q4 Nesse exemplo o que acontecerá é que a o sistema mostrará uma menssagem de erro e por isso, não completando a trânferencia 

class Conta {
  private _numero: string;
  private _saldo: number;

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

// Teste
const contaOrigem = new Conta('123', 500);
const contaDestino = new Conta('456', 1000);

console.log('Saldo da conta de origem:', contaOrigem.saldo);
console.log('Saldo da conta de destino:', contaDestino.saldo);

contaOrigem.transferir(contaDestino, 800);

console.log('Saldo da conta de origem após transferência:', contaOrigem.saldo);
console.log('Saldo da conta de destino após transferência:', contaDestino.saldo);
