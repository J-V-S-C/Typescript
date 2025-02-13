export const task10 = () => {
  let x: unknown;

  x = 'fabio';
  x = 0x10f1;
  x = 10.1;
  x = 100;
  x = 'marmelada';

  const y = 20;
  if (typeof x === 'number') console.log(x + y);
  else return console.log(x);
};
