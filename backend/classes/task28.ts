export const task28 = () => {
  class Car {
    private readonly motor = new Motor();

    start(): void {
      this.motor.start();
    }

    accelerate(): void {
      this.motor.accelerate();
    }

    stop(): void {
      this.motor.stop();
    }

    turnOff(): void {
      this.motor.turnOff();
    }
  }

  class Motor {
    start(): void {
      console.log('Motor is on...');
    }

    accelerate(): void {
      console.log('Motor is accelerating...');
    }

    stop(): void {
      console.log('Motor is stopped...');
    }

    turnOff(): void {
      console.log('Motor is off...');
    }
  }

  const car = new Car();

  car.start();
  car.accelerate();
  car.stop();
  car.turnOff();
};
