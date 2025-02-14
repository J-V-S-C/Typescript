export const task19 = () => {
  class Company {
    public readonly name: string; // public is obsolete
    private readonly colaborators: Colaborator[] = [];
    private readonly cnpj: string;

    constructor(name: string, cnpj: string) {
      this.name = name;
      this.cnpj = cnpj;
    }

    addColaborator(colaborator: Colaborator): void {
      this.colaborators.push(colaborator);
    }

    showColaborators(): void {
      for (const colaborator of this.colaborators) {
        console.log(colaborator);
      }
    }
  }

  class Colaborator {
    constructor(
      public readonly name: string,
      public readonly lastName: string
    ) {}
  }

  const company1 = new Company('Company1', '123456789');
  const colaborator1 = new Colaborator('Colaborator1', 'LastName1');
  const colaborator2 = new Colaborator('Colaborator2', 'LastName2');
  const colaborator3 = new Colaborator('Colaborator3', 'LastName3');
  company1.addColaborator(colaborator1);
  company1.addColaborator(colaborator2);
  company1.addColaborator(colaborator3);
  company1.showColaborators();
  console.log(company1);
};
