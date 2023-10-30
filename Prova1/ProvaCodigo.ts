class Perfil {
  private id: number;
  private nome: string;
  private email: string;

  constructor(id: number, nome: string, email: string) {
    this.id = id;
    this.nome = nome;
    this.email = email;
  }

  getId(): number {
    return this.id;
  }

  getNome(): string {
    return this.nome;
  }

  getEmail(): string {
    return this.email;
  }
}

class Postagem {
  private id: number;
  private texto: string;
  private curtidas: number;
  private descurtidas: number;
  private data: Date;
  private perfil: Perfil;

  constructor(id: number, texto: string, perfil: Perfil) {
    this.id = id;
    this.texto = texto;
    this.curtidas = 0;
    this.descurtidas = 0;
    this.data = new Date();
    this.perfil = perfil;
  }

  curtir(): void {
    this.curtidas++;
  }

  descurtir(): void {
    this.descurtidas++;
  }

  ehPopular(): boolean {
    return this.curtidas > this.descurtidas * 1.5;
  }
}

class PostagemAvancada extends Postagem {
  private hashtags: string[];
  private visualizacoesRestantes: number;

  constructor(id: number, texto: string, perfil: Perfil, hashtags: string[], visualizacoesRestantes: number) {
    super(id, texto, perfil);
    this.hashtags = hashtags;
    this.visualizacoesRestantes = visualizacoesRestantes;
  }

  adicionarHashtag(hashtag: string): void {
    this.hashtags.push(hashtag);
  }

  existeHashtag(hashtag: string): boolean {
    return this.hashtags.includes(hashtag);
  }

  decrementarVisualizacoes(): void {
    if (this.visualizacoesRestantes > 0) {
      this.visualizacoesRestantes--;
    }
  }
}

class RepositorioDePerfis {
  private perfis: Perfil[] = [];

  incluir(perfil: Perfil): void {
    this.perfis.push(perfil);
  }

  consultar(id?: number, nome?: string, email?: string): Perfil | null {
    if (id) {
      return this.perfis.find((perfil) => perfil.getId() === id) || null;
    }
    if (nome) {
      return this.perfis.find((perfil) => perfil.getNome() === nome) || null;
    }
    if (email) {
      return this.perfis.find((perfil) => perfil.getEmail() === email) || null;
    }
    return null;
  }
}

class RepositorioDePostagens {
  private postagens: Postagem[] = [];

  incluir(postagem: Postagem): void {
    this.postagens.push(postagem);
  }

  consultar(id?: number, texto?: string, hashtag?: string, perfil?: Perfil): Postagem[] {
    return this.postagens.filter((postagem) => {
      if (id && postagem.getId() !== id) return false;
      if (texto && !postagem.texto.includes(texto)) return false;
      if (hashtag && postagem instanceof PostagemAvancada && !postagem.existeHashtag(hashtag)) return false;
      if (perfil && postagem.perfil.getId() !== perfil.getId()) return false;
      return true;
    });
  }
}

class RedeSocial {
  private repositorioDePerfis: RepositorioDePerfis;
  private repositorioDePostagens: RepositorioDePostagens;

  constructor() {
    this.repositorioDePerfis = new RepositorioDePerfis();
    this.repositorioDePostagens = new RepositorioDePostagens();
  }

  incluirPerfil(perfil: Perfil): void {
    const existingProfile = this.repositorioDePerfis.consultar(perfil.getId(), perfil.getNome(), perfil.getEmail());
    if (!existingProfile && perfil.getId() && perfil.getNome() && perfil.getEmail()) {
      this.repositorioDePerfis.incluir(perfil);
      console.log("Perfil incluído com sucesso!");
    } else {
      console.log("Erro ao incluir o perfil.");
    }
  }

  consultarPerfil(id?: number, nome?: string, email?: string): Perfil | null {
    return this.repositorioDePerfis.consultar(id, nome, email);
  }

  incluirPostagem(postagem: Postagem): void {
    const existingPost = this.repositorioDePostagens.consultar(postagem.id);
    if (!existingPost && postagem.id && postagem.texto && postagem.perfil) {
      this.repositorioDePostagens.incluir(postagem);
      console.log("Postagem incluída com sucesso!");
    } else {
      console.log("Erro ao incluir a postagem.");
    }
  }

  consultarPostagens(id?: number, texto?: string, hashtag?: string, perfil?: Perfil): Postagem[] {
    return this.repositorioDePostagens.consultar(id, texto, hashtag, perfil);
  }

  curtir(idPostagem: number): void {
    const postagem = this.repositorioDePostagens.consultar(idPostagem)[0];
    if (postagem) {
      postagem.curtir();
      console.log("Postagem curtida!");
    } else {
      console.log("Postagem não encontrada.");
    }
  }

  descurtir(idPostagem: number): void {
    const postagem = this.repositorioDePostagens.consultar(idPostagem)[0];
    if (postagem) {
      postagem.descurtir();
      console.log("Postagem descurtida!");
    } else {
      console.log("Postagem não encontrada.");
    }
  }

  decrementarVisualizacoes(postagem: PostagemAvancada): void {
    if (postagem.visualizacoesRestantes > 0) {
      postagem.decrementarVisualizacoes();
    }
  }

  exibirPostagensPorPerfil(id: number): Postagem[] {
    const perfil = this.repositorioDePerfis.consultar(id);
    if (perfil) {
      const postagens = this.repositorioDePostagens.consultar(undefined, undefined, undefined, perfil);
      const advancedPostagens = postagens.filter((postagem) => postagem instanceof PostagemAvancada);
      advancedPostagens.forEach((postagem) => this.decrementarVisualizacoes(postagem as PostagemAvancada));
      return advancedPostagens.filter((postagem) => (postagem as PostagemAvancada).visualizacoesRestantes > 0);
    }
    return [];
  }

  
 exibirPostagensPopulares(): Postagem[] {
    return this.repositorioDePostagens.postagens.filter((postagem) => postagem.ehPopular());
  }

  exibirHashtagsPopulares(): string[] {
    const hashtagCount = new Map<string, number>();

    this.repositorioDePostagens.postagens
      .filter((postagem) => postagem instanceof PostagemAvancada)
      .forEach((postagem) => {
        const postagemAvancada = postagem as PostagemAvancada;
        postagemAvancada.hashtags.forEach((hashtag) => {
          if (hashtagCount.has(hashtag)) {
            hashtagCount.set(hashtag, hashtagCount.get(hashtag) + 1);
          } else {
            hashtagCount.set(hashtag, 1);
          }
        });
      });

    const popularHashtags = Array.from(hashtagCount.entries())
      .filter(([hashtag, count]) => count > 1)
      .sort((a, b) => b[1] - a[1])
      .map(([hashtag]) => hashtag);

    return popularHashtags;
  }
}

class App {
  private redeSocial: RedeSocial;

  constructor() {
    this.redeSocial = new RedeSocial();
  }

  iniciar() {
    while (true) {
      console.log("\nEscolha uma opção:");
      console.log("1. Criar Perfil");
      console.log("2. Criar Postagem");
      console.log("3. Curtir Postagem");
      console.log("4. Descurtir Postagem");
      console.log("5. Exibir Postagens Populares");
      console.log("6. Adicionar Hashtag a Postagem");
      console.log("7. Marcar Postagem como Favorita");
      console.log("8. Exibir Favoritos");
      console.log("9. Sair");

      const opcao = Number(prompt("Digite o número da opção desejada:"));
switch (opcao) {
        case 1:
          
          break;
        case 2:
          
          break;
        case 3:
          
          break;
        case 4:
       
          break;
        case 5:
          
          break;
        case 6:
         
          break;
        case 7:
         
          break;
        case 8:
         
          break;
        case 9:
          console.log("Saindo da aplicação.");
          return;
        default:
          console.log("Opção inválida. Por favor, escolha uma opção válida.");
          break;
      }
    }
  }
}

const minhaApp = new App();
minhaApp.iniciar();
