class Postagem {
    id: number;
    texto: string;
    quantidadeCurtidas: number;

    constructor(id: number, texto: string) {
        this.id = id;
        this.texto = texto;
        this.quantidadeCurtidas = 0;
    }

    curtir(): void {
        this.quantidadeCurtidas++;
    }

    toString(): string {
        return `ID: ${this.id}\nTexto: ${this.texto}\nCurtidas: ${this.quantidadeCurtidas}`;
    }
}

class Microblog {
    postagens: Postagem[] = [];

    incluirPostagem(postagem: Postagem): void {
        this.postagens.push(postagem);
    }

    excluirPostagem(id: number): void {
        const indice = this.postagens.findIndex(postagem => postagem.id === id);
        if (indice !== -1) {
            this.postagens.splice(indice, 1);
        } else {
            console.log(`Postagem com ID ${id} não encontrada.`);
        }
    }

    postagemMaisCurtida(): Postagem | null {
        if (this.postagens.length === 0) {
            return null;
        }

        let maisCurtida = this.postagens[0];
        for (const postagem of this.postagens) {
            if (postagem.quantidadeCurtidas > maisCurtida.quantidadeCurtidas) {
                maisCurtida = postagem;
            }
        }
        return maisCurtida;
    }

    curtirPostagem(id: number): void {
        const postagem = this.postagens.find(postagem => postagem.id === id);
        if (postagem) {
            postagem.curtir();
        } else {
            console.log(`Postagem com ID ${id} não encontrada.`);
        }
    }
}
