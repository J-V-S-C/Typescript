export const task12 = (): void => {
  let x = 10;
  x = 0b1010;
  const y = 10;
  const a = 100;

  const person = {
    name: 'fabio' as const,
    lastName: 'makita',
  };

  interface fruits {
    name: string;
    color: string;
  }

  interface NewFruits extends fruits {
    smell: string;
  }

  const fruit: NewFruits = {
    name: 'Pineapple',
    color: 'yellow',
    smell: 'Nice()',
  };
  function pickColor(color: 'blue' | 'red' | 'green'): string {
    return color;
  }

  console.log(pickColor('red'), person, x, y, fruit);
};
