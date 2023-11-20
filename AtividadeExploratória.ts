//
1- Erros que levam à parada brusca em TypeScript incluem referências indefinidas (undefined), chamadas de métodos inexistentes e manipulação inadequada de tipos.

2- Uma exceção em programação é um evento anormal que interrompe o fluxo normal do programa. Diferencia-se de um erro comum por ser um evento que pode ser tratado durante a execução.

3- TypeScript utiliza a mesma abordagem de tratamento de exceções que JavaScript, com os blocos try-catch para capturar e lidar com exceções.

4-O bloco try-catch no tratamento de exceções em TypeScript envolve o código suscetível a exceções no bloco try e lida com essas exceções no bloco catch, permitindo um controle mais eficiente de erros.

5- Em TypeScript, você pode criar exceções personalizadas estendendo a classe Error.

//  class MinhaExcecao extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'MinhaExcecao';
 }
}

6- Tipos comuns de exceções em aplicações TypeScript incluem TypeError, ReferenceError e qualquer exceção personalizada que você defina.

7- O bloco finally é utilizado para executar código, independentemente de ocorrer uma exceção ou não, sendo útil para operações de limpeza ou liberação de recursos.

8- O tratamento de exceções em TypeScript melhora a robustez e segurança da aplicação ao prevenir falhas inesperadas, permitindo um controle mais eficiente sobre erros.

9-Não há diferenças significativas no tratamento de exceções entre TypeScript e JavaScript, pois TypeScript compila para JavaScript.

10-Para testar e depurar exceções em TypeScript, utilize ferramentas de desenvolvimento como os recursos de depuração dos navegadores e frameworks de teste como Jest.
