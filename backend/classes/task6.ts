//Tuplas, elas são tipo arrays, só que os tipos já são definidos
// para cada item do array, sua posição também

export const task6 = () => {
  const dadosCliente1: readonly [number, string] = [1, "fabiano"];
  const dadosCliente2: [number, string, string] = [1, "fabiano", "akita"];
  const dadosCliente3: [number, string, string?] = [1, "fabiano"];
  const dadosCliente4: [number, string, ...string[]] = [
    1,
    "fabiano",
    "makita",
    "soldador",
    "pedrero",
    "uber",
    "lixeiro",
    "fullstack",
    "trilionario",
  ];

  console.log(dadosCliente1);
  console.log(dadosCliente2);
  console.log(dadosCliente3);
  console.log(dadosCliente4);

  const array1: readonly string[] = ["Flavio", "Augusto"];

  const array2: ReadonlyArray<string> = ["Galego", "Augusto"];

  console.log(array1);
  console.log(array2);
};
//...string[] permite quantas strings quiser, precisa ser do tipo array
