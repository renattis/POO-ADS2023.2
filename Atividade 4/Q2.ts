//Crie uma função que recebe como parâmetro um número e retorna true se onúmero for par e false se for ímpar. usando Typescript

function ehPar(numero: number): boolean {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

const numero: number = 7;
const resultado: boolean = ehPar(numero);

if (resultado) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}
