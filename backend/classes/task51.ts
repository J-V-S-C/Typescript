export const task51 = () => {
  function decorator(
    classPrototype: Object,
    nameMethod: string | symbol | undefined,
    index: number
  ) {
    console.log('📌 Classe Protótipo:', classPrototype);
    console.log(
      '📌 Nome do Método ou Construtor:',
      nameMethod ?? 'constructor'
    );
    console.log('📌 Índice do Parâmetro:', index);
  }

  class OnePerson {
    name: string;
    surname: string;
    age: number;

    constructor(
      @decorator name: string,
      @decorator surname: string,
      @decorator age: number
    ) {
      this.name = name;
      this.surname = surname;
      this.age = age;
    }

    method(@decorator msg: string): string {
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

  const person = new OnePerson('Thomas', 'Turbano', 69);
  const method = person.method('You are arrested');
  console.log(method);
};
