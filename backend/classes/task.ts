export const task = () => {
  let nome: string = "Luiz";
  let idade: number = 0b1010; // 10, 1.43, -45,3, 0xf00d
  let adulto: boolean = true;
  let simbolo: symbol = Symbol("mciwc");

  let arrayDeNum: Array<number> = [2, 54, 3];
  let arrayNum2: number[];

  let pessoas: { name: string; age: number; adult?: boolean } = {
    age: 43,
    name: "pikasso",
  };

  const soma = (x: number, y: number) => x + y;

  const result = soma(3, 5);

  const mensagem = console.log(
    `As pessoas são: ${pessoas.name}, e a soma é: ${result}`
  );
  return mensagem;
};
