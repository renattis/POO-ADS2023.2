//Crie uma função que recebe como parâmetro um número e retorna true se o número for primo e false caso contrário. 

function ehPrimo(numero: number): boolean {
    if (numero <= 1) {
        return false;
    }

    if (numero <= 3) {
        return true;
    }

    if (numero % 2 === 0 || numero % 3 === 0) {
        return false;
    }

    let divisor = 5;
    while (divisor * divisor <= numero) {
        if (numero % divisor === 0 || numero % (divisor + 2) === 0) {
            return false;
        }
        divisor += 6;
    }

    return true;
}

const numero: number = 17;
const resultado: boolean = ehPrimo(numero);

if (resultado) {
    console.log("O número é primo.");
} else {
    console.log("O número não é primo.");
}
