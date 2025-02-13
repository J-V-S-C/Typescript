export const task7 = () => {
  let x;
  if (typeof x === "undefined") x = 20;
  console.log(x * 2);

  function createPerson(
    firstName: string,
    lastName: string
  ): {
    firstName: string;
    lastName: string;
  } {
    return {
      firstName,
      lastName,
    };
  }
  //objeto json

  console.log(createPerson("hey", "buddy"));

  function squareOf(x: any): number | null {
    if (typeof x === "number") return x * x;
    return null;
  }

  const squareOfNumbers = squareOf(8);

  const FunctionList = [squareOfNumbers];

  if (FunctionList.includes(null)) {
    console.log("conta invalida");
  } else {
    console.log(
      FunctionList.reduce((result, value) => {
        return (result as number) + (value as number) * 10;
      }, 0) //valor inicial do reduce 'result'
    );
  }
};
