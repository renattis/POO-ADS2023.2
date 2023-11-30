//Desconsiderar operação:
//Às vezes, é apropriado simplesmente desconsiderar uma operação se algo der errado, sem interromper a execução do programa. Por exemplo, se você estiver manipulando uma lista e um elemento não existir, pode optar por continuar sem realizar a operação.
//Limitações:Possíveis Efeitos Colaterais: Desconsiderar operações pode levar a efeitos colaterais indesejados, pois o programa continua executando mesmo em situações de erro.
//                                         Dificuldade de Diagnóstico: Pode ser difícil diagnosticar problemas quando as operações são desconsideradas, especialmente se os erros não forem registrados ou monitorados.

let lista = [1, 2, 3, 4, 5];
let index = 10;

// Desconsiderando a operação se o índice estiver fora dos limites
if (index < lista.length) {
  let elemento = lista[index];
  console.log('Elemento encontrado:', elemento);
} else {
  console.log('Índice fora dos limites. Operação desconsiderada.');
}



//Exibir mensagem de erro: Ao detectar um problema, você pode optar por exibir uma mensagem de erro para alertar o usuário ou o desenvolvedor sobre o ocorrido.
// Limitações: Usuário Final: Mensagens de erro destinadas ao usuário final podem não ser suficientes para diagnóstico técnico. Mensagens mais detalhadas podem ser necessárias durante o desenvolvimento.
//                           Localização de Erros: Dependendo da implementação, pode ser desafiador rastrear a origem exata do erro no código.


let valor = 'abc';

if (isNaN(valor)) {
  console.error('Erro: O valor não é um número válido.');
} else {
  let resultado = valor * 2;
  console.log('Resultado:', resultado);
}


//Exceções: O uso de exceções, como mencionamos anteriormente, é uma maneira robusta de lidar com erros, especialmente aqueles que podem comprometer a integridade do programa.
//Limitações: Custo de Desempenho: Lidar com exceções pode ter um custo de desempenho significativo, especialmente em ambientes onde o lançamento e a captura de exceções são operações custosas.
//            Complexidade: O uso excessivo de exceções pode tornar o código mais complexo e difícil de entender. É importante equilibrar o uso de exceções para casos realmente excepcionais.

try {
  let resultado = someUndefinedVariable / 0;
} catch (error) {
  console.error('Ocorreu um erro:', error.message);
}



