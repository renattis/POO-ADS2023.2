class Perfil {
  private _id: number;
  private _nome: string;
  private _email: string;
  private _postagens: Postagem[];

  constructor(id: number, nome: string, email: string) {
    this._id = id;
    this._nome = nome;
    this._email = email;
    this._postagens = [];
  }

  // Métodos get
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
}
