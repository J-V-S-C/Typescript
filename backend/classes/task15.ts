export const task15 = (): void => {
  type MapsStringCallback = (item: string) => string;
  //um tipo que recebe uma callback, o parametro é uma string item
  // e retorna uma string

  function mapStrings(
    array: string[],
    callbackfn: MapsStringCallback
  ): string[] {
    const newArray: string[] = [];
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      newArray.push(callbackfn(item));
    }

    return newArray;
  }

  const abc = ['a', 'b', 'c'];
  const abcMapped = mapStrings(abc, (item) => item.toUpperCase());

  console.log(abc);
  console.log(abcMapped);
};

//Uma função aceita um array do tipo vetor de string e uma callback
// do tipo que definimos antes, depois temos a definição do tipo
// de retorno, que é um vetor de string, temos uma constante
// do tipo vetor de string q recebe um array vazio, temos um
// loop de repetição, temos a definição do item q recebe a
// variavel array do parametro definindo a posição do contador,
// e a cont do novo array com o metodo push, que vai chamar a
// callback com o item de parametro, para mapear e modificar
// todos os itens do array
