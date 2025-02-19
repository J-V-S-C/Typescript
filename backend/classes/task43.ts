export const task43 = () => {
  function mergeObj<T, U>(obj1: T, obj2: U): T & U {
    return Object.assign({}, obj1, obj2);
    //Método assign recebe de parametro o obj de destino, o obj1, o obj2, ...
  }

  const obj1 = { key1: 'value1' };
  const obj2 = { key2: 'value2' };
  const merging = mergeObj(obj1, obj2);
  console.log(merging);
};
