class Perfil {
  private _id: number;
  private _nome: string;
  private _email: string;
  private _fileStorage: PerfilFileStorage;
  private _postagens: Postagem[]; 

  constructor(id: number, nome: string, email: string, nomeArquivo: string) {
    this._id = id;
    this._nome = nome;
    this._email = email;
    this._fileStorage = new PerfilFileStorage(nomeArquivo);
    this._postagens = []; 
  }

  getId(): number {
    return this._id;
  }

  getNome(): string {
    return this._nome;
  }

  getEmail(): string {
    return this._email;
  }

  getPostagens(): Postagem[] {
    return this._postagens;
  }

  adicionarPostagem(postagem: Postagem): void {
    this._postagens.push(postagem);
  }

  salvarPerfil(): void {
    const perfis = this._fileStorage.carregarPerfis();
    const index = perfis.findIndex(perfil => perfil.getId() === this._id);

    if (index !== -1) {
      perfis[index] = this;
    } else {
      perfis.push(this);
    }

    this._fileStorage.salvarPerfis(perfis);
  }

  static consultarPerfil(id: number, nome: string, email: string, nomeArquivo: string): Perfil | null {
    const perfis = new PerfilFileStorage(nomeArquivo).carregarPerfis();

    if (id) {
      return perfis.find(perfil => perfil.getId() === id) || null;
    }

    if (nome) {
      return perfis.find(perfil => perfil.getNome() === nome) || null;
    }

    if (email) {
      return perfis.find(perfil => perfil.getEmail() === email) || null;
    }

    return null;
  }
}
