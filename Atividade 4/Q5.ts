// Crie uma função que retorne os números de um array passados por parâmetro separados por traço (-) no formato string. Para isso, use o método forEach dos arrays.

function formatarArrayParaString(arrayNumeros: number[]): string {
    let resultado: string = "";

    arrayNumeros.forEach((numero, index) => {
        resultado += numero.toString();
        if (index !== arrayNumeros.length - 1) {
            resultado += "-";
        }
    });

    return resultado;
}

const numeros: number[] = [1, 2, 3, 4, 5];
const stringFormatada: string = formatarArrayParaString(numeros);

console.log(stringFormatada);


