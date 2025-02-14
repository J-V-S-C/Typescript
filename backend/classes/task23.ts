export const task23 = () => {
  class Person {
    static regularAge = 18;
    static regularCpf = '000.000.000-00';
    constructor(
      public name: string,
      public lastName: string,
      public age: number,
      public cpf: string
    ) {}

    regularMethodology(): void {
      console.log(Person.regularAge, Person.regularCpf);
    }

    static createPerson(name: string, lastName: string): Person {
      return new Person(name, lastName, Person.regularAge, Person.regularCpf);
    }
  }

  const person1 = new Person('Magnus', 'Carlsen', 21, '524.545.432-43');
  const person2 = Person.createPerson('Robert', 'Fischer');
  console.log(person1);
  console.log(person2);
  person1.regularMethodology();
  console.log(Person.regularAge, Person.regularCpf);
};
