export const task32 = () => {
  function add(a: unknown, b: unknown): number | string {
    return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
  }

  console.log(add(2, 6));
  console.log(add('a', 'b'));

  type Person = { type: 'person'; name: string };
  type Animal = { type: 'animal'; color: string };
  type PersonOrAnimal = Person | Animal;

  class Student implements Person {
    type: 'person' = 'person';
    constructor(public name: string) {}
  }

  function showName(obj: PersonOrAnimal): void {
    //if ('name' in obj) console.log(obj.name);
    //if (obj instanceof Student) console.log(obj.name);

    switch (obj.type) {
      case 'person':
        console.log(obj.name);
        return;

      case 'animal':
        console.log(`It's a ${obj.color} animal`);
        return;
    }
  }

  showName(new Student('João'));
  showName({ type: 'animal', color: 'red' });
};
