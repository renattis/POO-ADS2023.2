class AplicacaoException extends Error {}

class ContaInexistenteError extends AplicacaoException {}
class SaldoInsuficienteError extends AplicacaoException {}
class ValorInvalidoError extends AplicacaoException {}
class PoupancaInvalidaError extends AplicacaoException {}

class Conta {
  private _numero: string;
  private _saldo: number;
  private contas: Conta[] = [];

  constructor(numero: string, saldoInicial: number) {
    this._numero = numero;
    this.depositar(saldoInicial);
  }

  get saldo(): number {
    return this._saldo;
  }

  sacar(valor: number): void {
    this.validarValor(valor);
    if (valor > this._saldo) {
      throw new SaldoInsuficienteError('Saldo insuficiente para realizar o saque.');
    }
    this._saldo -= valor;
  }

  transferir(destino: Conta, valor: number): void {
    this.validarValor(valor);
    if (valor > this._saldo) {
      console.error('Erro ao transferir: Saldo insuficiente na conta de origem.');
      return;
    }

    this.sacar(valor);
    destino.depositar(valor);
  }

  depositar(valor: number): void {
    this.validarValor(valor);
    this._saldo += valor;
  }

  private validarValor(valor: number): void {
    if (valor <= 0) {
      throw new ValorInvalidoError('O valor deve ser maior que zero.');
    }
  }
}

class Banco {
  private contas: Conta[] = [];

  inserir(conta: Conta): void {
    try {
      this.consultar(conta.numero);
    } catch (error) {
      if (error instanceof ContaInexistenteError) {
        this.contas.push(conta);
        console.log('Conta cadastrada com sucesso.');
      } else {
        throw error;
      }
    }
  }

  consultar(numero: string): Conta {
    const conta = this.contas.find((c) => c.numero === numero);

    if (!conta) {
      throw new ContaInexistenteError('Conta não encontrada.');
    }

    return conta;
  }

  consultarPorIndice(indice: number): Conta {
    if (indice < 0 || indice >= this.contas.length) {
      throw new ContaInexistenteError('Índice inválido.');
    }

    return this.contas[indice];
  }

  alterar(conta: Conta, novoSaldo: number): void {
    conta.depositar(novoSaldo);
    console.log('Alteração de saldo realizada com sucesso.');
  }

  renderJuros(conta: Conta): void {
    if (!(conta instanceof Poupanca)) {
      throw new PoupancaInvalidaError('A conta não é uma poupança.');
    }
    // Lógica para render juros em poupança
    console.log('Juros renderizados com sucesso.');
  }
}

class Poupanca extends Conta {
  // Implementação específica para conta poupança, se necessário
}

// Testes
const banco = new Banco();

const conta1 = new Conta('123', 500);
const conta2 = new Poupanca('456', 1000);

banco.inserir(conta1);
banco.inserir(conta2);

console.log('Saldo da conta1:', conta1.saldo);

// Teste de consulta por índice bem-sucedido
const contaConsultada = banco.consultarPorIndice(0);
console.log('Conta consultada:', contaConsultada);

// Teste de consulta por índice com índice inválido
try {
  const contaInvalida = banco.consultarPorIndice(5);
  console.log('Conta consultada:', contaInvalida);
} catch (error) {
  console.error('Erro durante a consulta por índice:', error.message);
}

// Teste de alteração de saldo
banco.alterar(conta1, 1000);
console.log('Novo saldo da conta1:', conta1.saldo);

// Teste de render juros
try {
  banco.renderJuros(conta2);
} catch (error) {
  console.error('Erro ao renderizar juros:', error.message);
}

// Teste de cadastro de conta com mesmo número
const conta3 = new Conta('123', 800);
try {
  banco.inserir(conta3);
} catch (error) {
  console.error('Erro durante o cadastro de conta:', error.message);
}
