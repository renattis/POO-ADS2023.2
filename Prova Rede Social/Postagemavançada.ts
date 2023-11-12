class PostagemAvancada extends Postagem {
  private _hashtags: string[];
  private _visualizacoesRestantes: number;

  constructor(
    id: number,
    texto: string,
    curtidas: number,
    descurtidas: number,
    data: Date,
    perfil: Perfil,
    hashtags: string[],
    visualizacoesRestantes: number
  ) {
    super(id, texto, curtidas, descurtidas, data, perfil);
    this._hashtags = hashtags;
    this._visualizacoesRestantes = visualizacoesRestantes;
  }

  // Métodos get
  getHashtags(): string[] {
    return this._hashtags;
  }

  getVisualizacoesRestantes(): number {
    return this._visualizacoesRestantes;
  }
}
  adicionarHashtag(hashtag: string): void {
    this._hashtags.push(hashtag);
  }

  existeHashtag(hashtag: string): boolean {
    return this._hashtags.includes(hashtag);
  }

  decrementarVisualizacoes(): void {
    if (this._visualizacoesRestantes > 0) {
      this._visualizacoesRestantes--;
    }
  }
}
