export const task47 = () => {
  //It's a decorator, it takes a class as input and return a modified version of that class
  function invertNameAndColor<T extends new (...args: any[]) => any>(
    target: T
  ): T {
    console.log("I'm the guy who decorate things and I got the class", target);

    return class extends target {
      color: string;
      name: string;

      constructor(...args: any[]) {
        super(...args);
        this.name = this.invert(args[0]);
        this.color = this.invert(args[1]);
      }

      invert(value: string): string {
        return value.split('').reverse().join();
      }
    };
  }

  @invertNameAndColor
  class Animal {
    constructor(public name: string, public color: string) {
      console.log('I am just a class');
    }
  }

  const animal = new Animal('Simba', 'orange');
  console.log(animal);
};
