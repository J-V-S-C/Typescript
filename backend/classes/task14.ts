export const task14 = (): void => {
  type HasName = { name: string };
  type HasSurname = { surname: string };
  type HasAge = { age: number };
  type Person = HasName & HasSurname & HasAge;
  //interceção de tipos, também só permitidos no type

  type AB = 'A' | 'B';
  type AC = 'A' | 'C';
  type AD = 'D' | 'A';
  type Intersection = AB & AC & AD;

  const person: Person = {
    name: 'giuseppe',
    surname: 'giuseppe',
    age: 10101010,
  };

  const Var: Intersection = 'A';
  console.log(person);
  console.log(Var);
};
