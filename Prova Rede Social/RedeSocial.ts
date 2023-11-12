class RedeSocial {
  private _repositorioDePerfis: RepositorioDePerfis;
  private _repositorioDePostagens: RepositorioDePostagens;

  constructor() {
    this._repositorioDePerfis = new RepositorioDePerfis();
    this._repositorioDePostagens = new RepositorioDePostagens();
  }

  incluirPerfil(perfil: Perfil): void {
    const perfilExistente = this._repositorioDePerfis.consultar(
      perfil.getId(),
      perfil.getNome(),
      perfil.getEmail()
    );

    if (!perfilExistente && perfil.getId() && perfil.getNome() && perfil.getEmail()) {
      this._repositorioDePerfis.incluir(perfil);
    }
  }

  consultarPerfil(id: number, nome: string, email: string): Perfil | null {
    return this._repositorioDePerfis.consultar(id, nome, email);
  }

  incluirPostagem(postagem: Postagem): void {
    const postagemExistente = this._repositorioDePostagens.consultar(postagem.getId());

    if (!postagemExistente && postagem.getId() && postagem.getTexto()) {
      this._repositorioDePostagens.incluir(postagem);
    }
  }

  consultarPostagens(
    id?: number,
    texto?: string,
    hashtag?: string,
    perfil?: Perfil
  ): Postagem[] {
    return this._repositorioDePostagens.consultar(id, texto, hashtag, perfil);
  }

  curtir(idPostagem: number): void {
    const postagem = this._repositorioDePostagens.consultar(idPostagem)[0];
    postagem && postagem.curtir();
  }

  descurtir(idPostagem: number): void {
    const postagem = this._repositorioDePostagens.consultar(idPostagem)[0];
    postagem && postagem.descurtir();
  }

  decrementarVisualizacoes(postagemAvancada: PostagemAvancada): void {
    postagemAvancada.decrementarVisualizacoes();
  }

  exibirPostagensPorPerfil(id: number): Postagem[] {
    const perfil = this._repositorioDePerfis.consultar(id);
    const postagens = perfil ? this._repositorioDePostagens.consultar(undefined, undefined, undefined, perfil) : [];

    postagens.forEach((postagem) => postagem instanceof PostagemAvancada && this.decrementarVisualizacoes(postagem));

    return postagens.filter((postagem) => !(postagem instanceof PostagemAvancada && postagem.getVisualizacoesRestantes() <= 0));
  }

  exibirPostagensPorHashtag(hashtag: string): PostagemAvancada[] {
    const postagens = this._repositorioDePostagens.consultar(undefined, undefined, hashtag) as PostagemAvancada[];

    postagens.forEach((postagem) => postagem instanceof PostagemAvancada && this.decrementarVisualizacoes(postagem));

    return postagens.filter((postagem) => postagem instanceof PostagemAvancada && postagem.getVisualizacoesRestantes() > 0);
  }
}
