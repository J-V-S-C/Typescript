export const task4 = () => {
  const object1: {
    readonly keyA: string;
    keyB: string;
    keyC?: string;
    [key: string]: unknown;
  } = {
    keyA: "cock key",
    keyB: "pussy key",
  };

  object1.keyB = "new value";
  object1.keyC = "other value";
  object1.keyD = "hey buddy, I'm your missing grandpa";

  console.log(object1);
};
