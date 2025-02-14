export const task22 = () => {
  class Person {
    constructor(
      private name: string,
      private lastName: string,
      private age: number,
      private _cpf: string
    ) {
      this.cpf = _cpf;
    }

    set cpf(cpf: string) {
      console.log('Setting CPF...');
      this._cpf = cpf;
    }

    get cpf(): string {
      console.log('Getting CPF...');
      return this._cpf.replace(/\D/g, '');
    }
  }

  const person = new Person('Lucas', 'Carlsen', 21, '524.545.432-43');
  person.cpf = '193.456.789-99';
  console.log(person.cpf);
};
