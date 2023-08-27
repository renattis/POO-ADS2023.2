// Crie uma função que retorne os números de um array passados por parâmetro separados por traço (-) no formato string. Para isso, use o método forEach dos arrays.

const array = [1, 2, 3, 4, 5];

// Usando a função map para dobrar os elementos
const dobrados = array.map(numero => numero * 2);

console.log("Array dobrado:", dobrados); // Saída: [2, 4, 6, 8, 10]

// Usando a função reduce para totalizar a soma dos elementos dobrados
const somaTotal = dobrados.reduce((acumulador, numero) => acumulador + numero, 0);

console.log("Soma total:", somaTotal); // Saída: 30

