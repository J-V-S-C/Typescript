export const task46 = () => {
  //Esse value is number serve pra caso o retorno for true o ts saber q o valor é do tipo number
  function isNumber(value: unknown): value is number {
    return typeof value === 'number';
  }

  function sum<T>(...args: T[]): number {
    const returning = args.reduce((sum, value) => {
      if (isNumber(sum) && isNumber(value)) {
        return sum + value;
      }
      return sum;
    }, 0);

    return returning;
  }

  console.log(sum(1, 2, 3, 4));
  //console.log(sum(...[1, 2, 3, 4, 'a', 'b']));
  console.log(sum('a', 'b', 'c'));
};
