export const task21 = () => {
  class Company {
    readonly name: string; //Public isn't necessary
    protected readonly colaborators: Colaborator[] = [];
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

  class Udemy extends Company {
    constructor() {
      super('Udemy', '123456789');
    }

    popColaborator(): Colaborator | null {
      const colaborator = this.colaborators.pop();
      if (colaborator) return colaborator;
      return null;
    }
  }

  class Colaborator {
    constructor(
      public readonly name: string,
      public readonly lastName: string
    ) {}
  }

  const company = new Udemy();
  const colaborator1 = new Colaborator('Lucas', 'Carlsen');
  const colaborator2 = new Colaborator('Pedro', 'Henrique');
  const colaborator3 = new Colaborator('Ana', 'Clara');
  company.addColaborator(colaborator1);
  company.addColaborator(colaborator2);
  company.addColaborator(colaborator3);
  const removedColaborator = company.popColaborator();
  console.log('Removed --> ', removedColaborator);
  console.log('Company --> ', company);
};
