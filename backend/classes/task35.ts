export const task35 = () => {
  class Calculator {
    constructor(public number: number) {}

    add(n: number): this {
      this.number += n;
      return this;
    }

    sub(n: number): this {
      this.number -= n;
      return this;
    }

    div(n: number): this {
      this.number /= n;
      return this;
    }

    mul(n: number): this {
      this.number *= n;
      return this;
    }
  }

  class SubCalculator extends Calculator {
    pow(n: number): this {
      this.number **= n;
      return this;
    }
  }

  const calculator = new SubCalculator(10);
  calculator.add(3).mul(5).div(90).pow(7).sub(1).add(100).div(9).pow(2);
  console.log(calculator);
};
