export const task44 = () => {
  class Person<T, U> {
    constructor(public name: T, public age: U) {}
  }

  class Stack<T> {
    private cont = 0;
    private elements: { [k: number]: T } = {};

    push(element: T): void {
      this.elements[this.cont] = element;
      this.cont++;
    }

    pop(): T | void {
      if (this.isEmpty()) return undefined;

      this.cont--;
      const element = this.elements[this.cont];
      delete this.elements[this.cont];
      return element;
    }

    isEmpty(): boolean {
      return this.cont === 0;
    }

    size(): number {
      return this.cont;
    }

    showStack(): void {
      for (const key in this.elements) {
        console.log(this.elements[key]);
      }
    }
  }

  const stack = new Stack<number | string>();
  stack.push(1);
  stack.push(3);
  stack.push(5);
  stack.push(7);
  stack.push('Who read is gay');
  while (!stack.isEmpty()) {
    console.log(stack.pop());
  }
};
