export const task34 = () => {
  type Vehicle = {
    brand: string;
    year: number;
  };

  type Car = {
    brand: Vehicle['brand'];
    year: Vehicle['year'];
    name: string;
  };

  const car: Car = {
    brand: 'Ford',
    year: 2020,
    name: 'Nome',
  };

  console.log(car);
};
