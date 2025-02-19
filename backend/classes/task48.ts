export const task48 = () => {
  function invertNameAndColor(param1: string, param2: string) {
    return function <T extends new (...args: any[]) => any>(target: T): T {
      console.log("I'm the decorator andinvertNameAndColor received", target);

      return class extends target {
        color: string;
        name: string;

        constructor(...args: any[]) {
          super(...args);
          this.name = this.invert(args[0]);
          this.color = this.invert(args[1]);
        }

        invert(value: string): string {
          return value.split('').reverse().join() + ' ' + param1 + ' ' + param2;
        }
      };
    };
  }

  @invertNameAndColor('Another thing', 'Value 2')
  class Animal {
    constructor(public name: string, public color: string) {
      console.log("I'm a class");
    }
  }
  const animal = new Animal('Pumba', 'Red');
  console.log(animal);
};
