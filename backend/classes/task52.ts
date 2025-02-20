// O que são decorators??
// O decorator é uma função que modifica classes, métodos ou propriedades sem alterar direta,ente o seu código

export const task52 = () => {
  function decorator(classPrototype: any, name: string | symbol): any {
    let propertyValue: any;
    return {
      get: () => propertyValue,
      set: (value: any) => {
        if (typeof value === 'string') {
          propertyValue = value.split('').reverse().join('');
          return;
        }
        propertyValue = value;
      },
    };
  }

  class OnePerson {
    @decorator
    name: string;
    @decorator
    surname: string;
    @decorator
    age: number;

    constructor(name: string, surname: string, age: number) {
      this.name = name;
      this.surname = surname;
      this.age = age;
    }

    method(msg: string): string {
      return `${this.name} ${this.surname}: ${msg}`;
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

  const person = new OnePerson('João', 'Victor', 16);
  const method = person.method('Achieving everything');
  console.log(method);
};
