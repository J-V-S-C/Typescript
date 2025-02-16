export const task39 = () => {
  type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;
  function myFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (callbackfn(array[i])) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  }

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const arrayOriginalFiltering = array.filter((value) => value < 5);
  console.log(arrayOriginalFiltering);

  const arrayFiltering = myFilter(array, (value, index, array) => value < 5);
  console.log(arrayFiltering);
};
