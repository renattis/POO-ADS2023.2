class RepositorioDePostagens {
  private _postagens: Postagem[];

  constructor() {
    this._postagens = [];
  }

  incluir(postagem: Postagem): void {
    this._postagens.push(postagem);

    if (postagem instanceof PostagemAvancada) {
      postagem.getPerfil().getPostagens().push(postagem);
    }
  }

  consultar(
    id?: number,
    texto?: string,
    hashtag?: string,
    perfil?: Perfil
  ): Postagem[] {
    return this._postagens.filter((postagem) => {
      return (
        (id === undefined || postagem.getId() === id) &&
        (texto === undefined || postagem.getTexto().includes(texto)) &&
        (hashtag === undefined ||
          (postagem instanceof PostagemAvancada &&
            postagem.getHashtags().includes(hashtag))) &&
        (perfil === undefined || postagem.getPerfil() === perfil)
      );
    });
  }
}
