export const task20 = () => {
  class Person {
    constructor(
      public name: string,
      public lastName: string,
      public age: number,
      public cpf: string
    ) {}
    getAge(): number {
      return this.age;
    }

    getCpf(): string {
      return this.cpf;
    }

    getCompleteName(): string {
      return `${this.name} ${this.lastName}`;
    }
  }

  class Student extends Person {
    constructor(
      name: string,
      lastName: string,
      age: number,
      cpf: string,
      public classroom: string
    ) {
      super(name, lastName, age, cpf);
    }

    getCompleteName(): string {
      console.log('Doing something before');
      const result = super.getCompleteName();
      return `${result} - Hey Student`;
    }
    //super here is calling the method from the parent class
  }

  class Client extends Person {
    getCompleteName(): string {
      return `It comes from Client: ${this.name} ${this.lastName}`;
    }
  }

  const person = new Person('Leonardo', 'Dicaprio', 45, '123.456.789-00');
  const student = new Student(
    'Leonardo',
    'Dicaprio',
    45,
    '123.456.789-00',
    'A'
  );
  const client = new Client('Leonardo', 'Dicaprio', 45, '123.456.789-00');

  console.log(person.getCompleteName());
  console.log(student.getCompleteName());
  console.log(client.getCompleteName());
  console.log(student);
};
