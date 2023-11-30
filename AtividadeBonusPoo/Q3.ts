// Confesso que não entendi bem a questão, mas oq eu entendi é que a resposta seria um codigo que chama o metodo sacar dentro de uma classe Conta que por sua vez teria uma exceção que permitiria o saldo ficar negativo. Então usarei o codigo disponivel no slide como base !

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
}

// Teste
const minhaConta = new Conta('123456', 1000);

try {
  minhaConta.sacar(1500); // avisará que o saldo não é suficiente
  console.log('Saque bem-sucedido.');
} catch (error) {
  console.error('Erro ao sacar:', error.message);
}

console.log('Saldo atual:', minhaConta.saldo);


