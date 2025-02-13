export const task3 = () => {
  function noReturn(...args: string[]): void {
    console.log(args.join(" de "));
  }
  const person = {
    nome: "sergio",
    sobrenome: "sacani",

    showName(): void {
      console.log(this.nome + " " + this.sobrenome);
    },
  };

  noReturn("sergio", "sacani");
  person.showName();
};
