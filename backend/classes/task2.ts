export const task2 = () => {
  function showMessage(msg: any) {
    return msg;
  }

  console.log(showMessage([1, 2, 3]));
  console.log(showMessage("ola"));
  console.log(showMessage(1));
};
