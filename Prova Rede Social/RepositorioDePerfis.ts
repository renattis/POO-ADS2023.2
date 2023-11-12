import fs from 'fs';
import Perfil from './Perfil';

class RepositorioDePerfis {
  private _perfis: Perfil[];
  private _nomeArquivo: string;

  constructor(nomeArquivo: string) {
    this._perfis = [];
    this._nomeArquivo = nomeArquivo;

    // Carrega perfis do arquivo ao inicializar
    this._perfis = this.carregarPerfis();
  }

  incluir(perfil: Perfil): void {
    this._perfis.push(perfil);
    this.salvarPerfis(); // Salva os perfis após incluir no repositório
  }

  consultar(id?: number, nome?: string, email?: string): Perfil | null {
    if (id !== undefined) {
      return this._perfis.find((perfil) => perfil.getId() === id) || null;
    }

    if (nome !== undefined) {
      return this._perfis.find((perfil) => perfil.getNome() === nome) || null;
    }

    if (email !== undefined) {
      return this._perfis.find((perfil) => perfil.getEmail() === email) || null;
    }

    return null;
  }

  private salvarPerfis(): void {
    const perfisJSON = JSON.stringify(this._perfis, null, 2);
    fs.writeFileSync(this._nomeArquivo, perfisJSON);
  }

  private carregarPerfis(): Perfil[] {
    try {
      const perfisJSON = fs.readFileSync(this._nomeArquivo, 'utf8');
      return JSON.parse(perfisJSON) || [];
    } catch (error) {
      console.error('Erro ao carregar perfis do arquivo:', error.message);
      return [];
    }
  }
}

export default RepositorioDePerfis;
