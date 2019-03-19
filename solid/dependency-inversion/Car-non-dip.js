
// Low level class
class GasEngine {
  constructor() {
    this.type = "Gasoline";
  }
  start() {
    console.log(`VAROOOM...${this.type} started`);
  }
}

// High level class
class Car {
  constructor() {
    this.engine = new GasEngine(); // depends on low level class
  }
  start() {
    this.engine.start();
  }
}

const car = new Car();
car.start();


