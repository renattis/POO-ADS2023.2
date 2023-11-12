class RepositorioDePerfis {
  private _perfis: Perfil[];

  constructor() {
    this._perfis = [];
  }

  incluir(perfil: Perfil): void {
    this._perfis.push(perfil);
  }

  consultar(id?: number, nome?: string, email?: string): Perfil | null {
    if (id !== undefined) {
      const perfilPorId = this._perfis.find((perfil) => perfil.getId() === id);
      if (perfilPorId) {
        return perfilPorId;
      }
    }

    if (nome !== undefined) {
      const perfilPorNome = this._perfis.find((perfil) => perfil.getNome() === nome);
      if (perfilPorNome) {
        return perfilPorNome;
      }
    }

    if (email !== undefined) {
      const perfilPorEmail = this._perfis.find((perfil) => perfil.getEmail() === email);
      if (perfilPorEmail) {
        return perfilPorEmail;
      }
    }

    return null;
  }
}
