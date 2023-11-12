const fs = require('fs');

class PerfilFileStorage {
  constructor(nomeArquivo) {
    this.nomeArquivo = nomeArquivo;
  }

  salvarPerfis(perfis) {
    const perfisJSON = JSON.stringify(perfis, null, 2);
    fs.writeFileSync(this.nomeArquivo, perfisJSON);
  }

  carregarPerfis() {
    try {
      const perfisJSON = fs.readFileSync(this.nomeArquivo, 'utf8');
      return JSON.parse(perfisJSON);
    } catch (error) {
      console.error('Erro ao carregar perfis do arquivo:', error.message);
      return [];
    }
  }
}

module.exports = PerfilFileStorage;
