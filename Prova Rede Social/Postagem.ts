class Postagem {
  private _id: number;
  private _texto: string;
  private _curtidas: number;
  private _descurtidas: number;
  private _data: Date;
  private _perfil: Perfil;

  constructor(
    id: number,
    texto: string,
    curtidas: number,
    descurtidas: number,
    data: Date,
    perfil: Perfil
  ) {
    this._id = id;
    this._texto = texto;
    this._curtidas = curtidas;
    this._descurtidas = descurtidas;
    this._data = data;
    this._perfil = perfil;
  }

  // Métodos get
  getId(): number {
    return this._id;
  }

  getTexto(): string {
    return this._texto;
  }

  getCurtidas(): number {
    return this._curtidas;
  }

  getDescurtidas(): number {
    return this._descurtidas;
  }

  getData(): Date {
    return this._data;
  }

  getPerfil(): Perfil {
    return this._perfil;
  }
}
