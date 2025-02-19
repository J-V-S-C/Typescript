export const task50 = () => {
  function decorator(
    classPrototype: any,
    nameMethod: string,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor | void {
    console.log(classPrototype);
    console.log(nameMethod);
    console.log(descriptor);
  }

  class OnePerson {
    name: string;
    surname: string;
    age: number;

    constructor(name: string, surname: string, age: number) {
      this.name = name;
      this.surname = surname;
      this.age = age;
    }

    @decorator
    method(msg: string): string {
      return ` \n${msg} \n${this.name} ${this.surname}: ${this.age}`;
    }

    get completeName(): string {
      return this.name + ' ' + this.surname;
    }

    set completeName(value: string) {
      const words = value.split(/\s+/g);
      const firstName = words.shift();
      if (!firstName) return;
      this.name = firstName;
      this.surname = words.join(' ');
    }
  }

  const person = new OnePerson('Giuseppe', 'Souza', 78);
  const method = person.method('Hello world!');
  console.log(method);
};
