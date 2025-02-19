//Record
export const task45 = () => {
  // Record é equivalente a isso: {[key: <T>] : U | T}
  // É só pra ficar mais legível
  const obj1: Record<string, string | number> = {
    name: 'Walter',
    surname: 'White',
    age: 52,
  };

  console.log(obj1);

  type PersonProtocol = {
    name?: string;
    surname?: string;
    age?: number;
  };

  //Required --> Transforma todas as propriedades opcionais em obrigatórias
  type PersonRequired = Required<PersonProtocol>;
  //Partial  --> Transforma todas as obrigatórias em opcionais
  type PersonPartial = Partial<PersonRequired>;
  //Readonly --> Transforma todas em readonly, só pode ler não alterar depois que são definidas
  type PersonReadonly = Readonly<PersonRequired>;
  //Pick ------> Rouba algumas propriedades de um tipo
  type PersonPick = Pick<PersonRequired, 'name' | 'surname'>;

  const obj2: PersonRequired = {
    name: 'James',
    surname: 'Lannister',
    age: 36,
  };

  console.log(obj2);

  //Extract and Exclude

  type ABC = 'A' | 'B' | 'C';
  type CDE = 'C' | 'D' | 'E';

  //Remove os elementos do tipo ABC que tambem estão em CDE
  type TypeExclude = Exclude<ABC, CDE>;

  //Permanece apenas com os elementos que estão nos 2 tipos
  type TypeExtract = Extract<ABC, CDE>;

  type AccountMongo = {
    _id: string;
    name: string;
    age: number;
    surname: string;
  };

  type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
    id: string;
  };

  const accountMongo: AccountMongo = {
    _id: '298n924f2h48fh928hf8928',
    name: 'Cersei',
    surname: 'Lannister',
    age: 24,
  };

  function mapAccount(accountMongo: AccountMongo): AccountApi {
    const { _id, ...acountData } = accountMongo;
    return { ...acountData, id: _id };
  }

  const accountApi = mapAccount(accountMongo);
  console.log('API:');
  console.log(accountApi);

  const exampleExclude: TypeExclude = 'A';
  const exampleExtract: TypeExtract = 'C';
  console.log('Exclude:', exampleExclude);
  console.log('Extract:', exampleExtract);
};
