interface LeituraSensor {
    sensor: string;
    tipo: string;
    valor: number;
    timestamp: Date;
}

const dadosBrutos: LeituraSensor[] = [
    { sensor: "sensor1", tipo: "temperatura", valor: 25, timestamp: new Date() },
    { sensor: "sensor2", tipo: "umidade", valor: 60, timestamp: new Date() },
    // Adicione mais dados brutos conforme necessário
];

// Função para processar os dados brutos e retornar as estatísticas desejadas
function processarDados(dados: LeituraSensor[]): Record<string, any> {
    const resultado = dados.reduce((acumulador, leitura) => {
        if (!acumulador[leitura.tipo]) {
            acumulador[leitura.tipo] = {
                total: 0,
                quantidade: 0,
                maximo: -Infinity,
                minimo: Infinity
            };
        }

        acumulador[leitura.tipo].total += leitura.valor;
        acumulador[leitura.tipo].quantidade++;
        acumulador[leitura.tipo].maximo = Math.max(acumulador[leitura.tipo].maximo, leitura.valor);
        acumulador[leitura.tipo].minimo = Math.min(acumulador[leitura.tipo].minimo, leitura.valor);

        return acumulador;
    }, {});

    // Calcular média para cada tipo de leitura
    for (const tipo in resultado) {
        resultado[tipo].media = resultado[tipo].total / resultado[tipo].quantidade;
    }

    return resultado;
}

const relatorio = processarDados(dadosBrutos);
console.log(relatorio);
