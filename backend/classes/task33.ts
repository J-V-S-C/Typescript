export const task33 = () => {
  type ColorsObj = typeof colorsObj;
  type KeyColors = keyof ColorsObj;
  const colorsObj = {
    red: 'red',
    green: 'green',
    blue: 'blue',
    yellow: 'yellow',
  };

  function favoriteColor(color: KeyColors, colors: ColorsObj) {
    return colors[color];
  }

  console.log(favoriteColor('red', colorsObj));
  console.log(favoriteColor('blue', colorsObj));
  console.log(favoriteColor('green', colorsObj));
};
