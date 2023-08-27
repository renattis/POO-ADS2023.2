//Dada a função soma abaixo, tente executar os scripts das alternativas e exiba os
//eventuais resultados:
//function soma(x: number, y?: any): number {
//return x + y
//}
//a. console.log(soma(1, 2));
//b. console.log(soma(1, "2"));
//c. console.log(soma(1));

function soma(x: number, y?: any): number {
    return x + y;
}

// Alternativa a: Passando dois números como argumentos
console.log(soma(1, 2)); // Saída: 3

// Alternativa b: Passando um número e uma string como argumentos
console.log(soma(1, "2")); // Saída: "12" (concatenação de string)

// Alternativa c: Passando apenas um número como argumento
console.log(soma(1)); // Saída: NaN (Not-a-Number) porque y é undefined
