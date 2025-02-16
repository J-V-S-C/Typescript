export const task31 = () => {
  interface Person {
    name: string;
  }

  interface Person {
    readonly surname: string;
    readonly addresses: readonly string[];
    age?: number;
  }

  const person: Person = {
    name: 'Reiner',
    surname: 'Fritch',
    addresses: ['Av. Brazil'],
    age: 26,
  };

  person.age = 69;
  console.log(person);
};
