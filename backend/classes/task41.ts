//Tipos default podem ser passados quando o tipo não é definido

export const task41 = () => {
  interface PersonProtocol<T = string, U = number> {
    name: T;
    surname: T;
    age: U;
  }

  type PersonProtocol2<T = string, U = number> = {
    name: T;
    surname: T;
    age: U;
  };

  const student1: PersonProtocol2<string, number> = {
    name: 'Dexter',
    surname: 'Morgan',
    age: 35,
  };

  const student2: PersonProtocol<number, number> = {
    name: 1,
    surname: 456,
    age: 100,
  };

  const student3: PersonProtocol2<boolean, boolean> = {
    name: true,
    surname: false,
    age: true,
  };

  const student4: PersonProtocol = {
    name: 'dwqimdoiqwmiodm',
    surname: 'dqdiowqdimqomdqwomdqwm',
    age: 1,
  };

  console.log(student1, student2, student3, student4);
};
