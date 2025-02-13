export const task5 = () => {
  function multiple(...args: Array<number>): number {
    return args.reduce((result, value) => result * value, 1);
  }

  function concatenaString(...args: string[]): string {
    return args.reduce((result, string) => result + string);
  }

  function toUpperCase(...args: string[]): string[] {
    return args.map((valor) => valor.toUpperCase());
  }

  const multiplied = multiple(9, 5, 3, 7);
  const CompleteString = concatenaString("eu tenho um", " cachorro caramelo");
  const UP = toUpperCase("leia bem esse aviso");

  console.log(multiplied);
  console.log(CompleteString);
  console.log(UP);
};

//O reduce pega uma callback como parametro,esse callback
// pegará um valor "resultado" como primeiro parametro para
// acumular o resultado e um segundo parametro que sera
// o valor de cada item do array,
// array esse que já está chamando o método reduce,
// após passar por cada item do array executando a callback ele
// acaba, retornando o valor "resultado",
// em poucas palavras ele é um loop de repetição pra array
// quando se precisa acumular um resultado

//O map vai passar por todos itens do array e os alterar
