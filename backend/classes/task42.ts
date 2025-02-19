export const task42 = () => {
  type GetKeyFn = <O, K extends keyof O>(object: O, key: K) => O[K];

  const getKey: GetKeyFn = (Object, key) => Object[key];

  const animal = {
    color: 'blue',
    vacines: ['Cancer', 'AIDS'],
    age: 31,
  };

  const vacines = getKey(animal, 'vacines');
  const color = getKey(animal, 'color');

  console.log(vacines, color, getKey(animal, 'age'));
};
