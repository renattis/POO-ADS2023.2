class Empregado {
  salario: number = 500;

  calcularSalario(): number {
    return this.salario;
  }
}

class Diarista extends Empregado {
  calcularSalario(): number {
    return super.calcularSalario() / 30;
  }
}

class Horista extends Diarista {
  calcularSalario(): number {
    return super.calcularSalario() / 24;
  }
}

class Pessoa {
  private _nome: string;
  private _sobrenome: string;

  constructor(nome: string, sobrenome: string) {
    this._nome = nome;
    this._sobrenome = sobrenome;
  }

  get nome(): string {
    return this._nome;
  }

  get sobrenome(): string {
    return this._sobrenome;
  }

  nomeCompleto(): string {
    return `${this._nome} ${this._sobrenome}`;
  }
}

class Funcionario extends Pessoa {
  private _matricula: string;
  private _salario: number;

  constructor(nome: string, sobrenome: string, matricula: string, salario: number) {
    super(nome, sobrenome);
    this._matricula = matricula;
    this._salario = salario >= 0 ? salario : 0;
  }

  get matricula(): string {
    return this._matricula;
  }

  get salario(): number {
    return this._salario;
  }

  calcularSalarioPrimeiraParcela(): number {
    return (60 / 100) * this._salario;
  }

  calcularSalarioSegundaParcela(): number {
    return (40 / 100) * this._salario;
  }
}

class Professor extends Funcionario {
  private _titulacao: string;

  constructor(nome: string, sobrenome: string, matricula: string, salario: number, titulacao: string) {
    super(nome, sobrenome, matricula, salario);
    this._titulacao = titulacao;
  }

  get titulacao(): string {
    return this._titulacao;
  }

  calcularSalarioPrimeiraParcela(): number {
    return this._salario;
  }

  calcularSalarioSegundaParcela(): number {
    return 0;
  }
}

class FolhaDePagamento {
  private pessoas: Pessoa[];

  constructor(pessoas: Pessoa[]) {
    this.pessoas = pessoas;
  }

  calcularPagamentos(): number {
    let totalSalarios = 0;

    for (const pessoa of this.pessoas) {
      if (pessoa instanceof Funcionario || pessoa instanceof Professor) {
        totalSalarios += pessoa.calcularSalarioPrimeiraParcela() + pessoa.calcularSalarioSegundaParcela();
      }
    }

    return totalSalarios;
  }
}

// Teste das classes e métodos
const empregado = new Empregado();
const diarista = new Diarista();
const horista = new Horista();

console.log("Salário do Empregado:", empregado.calcularSalario());
console.log("Salário da Diarista:", diarista.calcularSalario());
console.log("Salário do Horista:", horista.calcularSalario());

const pessoa = new Pessoa("João", "Silva");
console.log("Nome Completo:", pessoa.nomeCompleto());

const funcionario = new Funcionario("Maria", "Santos", "123", 1000);
console.log("Salário do Funcionário:", funcionario.salario);
console.log("Primeira Parcela:", funcionario.calcularSalarioPrimeiraParcela());
console.log("Segunda Parcela:", funcionario.calcularSalarioSegundaParcela());

const professor = new Professor("Pedro", "Oliveira", "456", 1500, "Doutor");
console.log("Salário do Professor:", professor.salario);
console.log("Primeira Parcela do Professor:", professor.calcularSalarioPrimeiraParcela());
console.log("Segunda Parcela do Professor:", professor.calcularSalarioSegundaParcela());

const folhaDePagamento = new FolhaDePagamento([funcionario, professor]);
console.log("Total de Salários na Folha de Pagamento:", folhaDePagamento.calcularPagamentos());
