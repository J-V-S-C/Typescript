export const task19 = () => {
  class Company {
    public readonly name: string; //public é obsoleto aqui
    private readonly colaborators: Colaborator[] = [];
    protected readonly cnpj: string;

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

  const company1 = new Company('Udemy', '11.111.111/0001-11');
  const colaborator1 = new Colaborator('Luiz', 'Otávio');
  const colaborator2 = new Colaborator('Pelé', 'Souza');
  const colaborator3 = new Colaborator('Rodrigo', 'Faro');
  company1.addColaborator(colaborator1);
  company1.addColaborator(colaborator2);
  company1.addColaborator(colaborator3);
  console.log(company1);
  company1.showColaborators();
};
