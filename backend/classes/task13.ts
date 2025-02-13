export const task13 = (): void => {
  type Age = number;
  type Person = {
    name: string;
    age: Age;
    wage: number;
    favoriteColor?: string;
  };

  type ColorRGB = 'red' | 'green' | 'yellow';
  type ColorCMYK = 'Cyan' | 'purple' | 'yellow' | 'black';
  type FavoriteColor = ColorRGB | ColorCMYK;
  //União de tipos, só disponiveis no type

  const person: Person = {
    age: 30,
    name: 'sergio',
    wage: 342_992,
  };

  function setFavoriteColor(person: Person, color: FavoriteColor): Person {
    return { ...person, favoriteColor: color };
  }

  console.log(setFavoriteColor(person, 'black'));
  console.log(person);
};
