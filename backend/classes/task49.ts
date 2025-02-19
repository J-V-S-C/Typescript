export const task49 = () => {
  interface Constructor {
    new (...args: any[]): any;
  }

  function invertNameAndColor(param1: string, param2: string) {
    return function (target: Constructor) {
      console.log("I'm the decorator and I received!", target);

      return class extends target {
        color: string;
        name: string;

        constructor(...args: any[]) {
          //It calls the original constructor of the target
          super(...args);

          this.name = this.invert(args[0]);
          this.color = this.invert(args[1]);
        }

        invert(value: string): string {
          return (
            value.split('').reverse().join('') + ' ' + param1 + ' ' + param2
          );
        }
      };
    };
  }

  function anotherDecorator(param1: string) {
    return function (target: Constructor) {
      console.log("I'm the only decorator " + param1);
      return target;
    };
  }

  @anotherDecorator('The param of the another decorator') //2
  @invertNameAndColor('Another thing', 'Value 2') //1
  class Animal {
    constructor(public name: string, public color: string) {
      console.log("Don't worry, I'm just a class");
    }
  }

  const animal = new Animal('Timão', 'Yellow');
  console.log(animal);
};
