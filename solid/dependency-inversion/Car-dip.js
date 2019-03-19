// low level class
class GasEngine {
  constructor() {
    this.type = "Gasoline";
  }
  start() {
    console.log(`VAROOOM...${this.type} started`);
  }
}

// low level class
class ElectricMotor {
  constructor() {
    this.type = "Electric";
    this.power = "90kWh";
  }
  turnOn() {
    console.log(`    ...${this.power} ${this.type} motor started`);
  }
}

// use adapter provides a high level abstraction
const gasEngineAdapter = (function(gasEngine) {
    function startGasEngine() {
      gasEngine.start();
    }
    return {
      start: startGasEngine
    }
  })(new GasEngine());

// use adapter provides a high level abstraction
const electricMotorAdapter = (function(motor){
    function turnOnEngine() {
      motor.turnOn();
    }
    return {
      start: turnOnEngine
    }
  })(new ElectricMotor());



  // high level class not directly linked to the level class
class Car {
  constructor(engine) {
    this.engine = engine;
  }

  start() {
    this.engine.start();
  }
}

const gasolineCar = new Car(gasEngineAdapter);
gasolineCar.start();

const electricCar = new Car(electricMotorAdapter);
electricCar.start();