export const task11 = (): void => {
  function addOrConcat(
    a: number | string | boolean,
    b: number | string | boolean
  ): number | string {
    if (typeof a === 'number' && typeof b === 'number') return a + b;
    return `${a}&&${b}`;
  }

  console.log(addOrConcat(10, 20));
  console.log(addOrConcat('10', '20'));
  console.log(addOrConcat(10, '20'));
  console.log(addOrConcat('10', 20));
  console.log(addOrConcat('10', 'true'));
  console.log(addOrConcat(false, false));
  console.log(addOrConcat(3, 1));
};
