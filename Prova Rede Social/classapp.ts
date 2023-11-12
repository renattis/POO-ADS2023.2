import * as readlineSync from 'readline-sync';

class App {
  private _redeSocial: RedeSocial;

  constructor() {
    this._redeSocial = new RedeSocial();
  }

  exibirMenu(): void {
    let opcao;

    do {
      console.log("\n===== Menu Principal =====");
      console.log("1. Incluir Perfil");
      console.log("2. Consultar Perfil");
      console.log("3. Incluir Postagem");
      console.log("4. Consultar Postagens");
      console.log("5. Curtir Postagem");
      console.log("6. Descurtir Postagem");
      console.log("7. Decrementar Visualizações");
      console.log("8. Exibir Postagens por Perfil");
      console.log("9. Exibir Postagens por Hashtag");
      console.log("0. Sair");

      opcao = readlineSync.question("Digite a opção desejada: ");

      switch (opcao) {
        case '1':
          this.incluirPerfil();
          break;
        case '2':
          this.consultarPerfil();
          break;
        case '3':
          this.incluirPostagem();
          break;
        case '4':
          this.consultarPostagens();
          break;
        case '5':
          this.curtirPostagem();
          break;
        case '6':
          this.descurtirPostagem();
          break;
        case '7':
          this.decrementarVisualizacoes();
          break;
        case '8':
          this.exibirPostagensPorPerfil();
          break;
        case '9':
          this.exibirPostagensPorHashtag();
          break;
        case '0':
          console.log("Saindo do aplicativo. Até logo!");
          break;
        default:
          console.log("Opção inválida. Tente novamente.");
      }
    } while (opcao !== '0');
  }

  incluirPerfil(): void {

  }

  consultarPerfil(): void {

  }

  incluirPostagem(): void {
   
  }

  consultarPostagens(): void {
    
  }

  curtirPostagem(): void {

  }

  descurtirPostagem(): void {

  }

  decrementarVisualizacoes(): void {

  }

  exibirPostagensPorPerfil(): void {

  }

  exibirPostagensPorHashtag(): void {

  }
}

const app = new App();
app.exibirMenu();
