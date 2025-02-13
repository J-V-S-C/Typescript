export const task9 = (): void => {
  enum Colors {
    red = 43,
    yellow = 23,
    green = 94,
  }

  enum Colors {
    purple = 'purple',
    white = 204,
    pink,
  }

  function pickAColor(color: Colors): void {
    console.log(Colors[color]);
  }

  pickAColor(Colors.purple);
};

//pra falar a verdade nao entendi muito bem isso
//enums são uma forma de estruturar dados,
//mas não sei falar muito bem a diferença deles para
// um simples array, uma tupla ou até um JSON

//estudando um pouco mais descobri que o enum atrribui constantes
// a valores arbitrários, ou seja, tu tem uma constante 1
// e quer chama-la de 'a', voce fará um enum
// atribuindo a constante 1 ao nome 'a',
// enums são formas de apelidar constantes
