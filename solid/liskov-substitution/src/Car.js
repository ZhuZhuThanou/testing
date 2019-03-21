
class Car {
  start() {
    console.log('Car starts');
  }
}

class Ford extends Car {
  
  start() {
    console.log('Ford starts');
  }
}

class Honda extends Car {
  start() {
    console.log('Honda starts');
  }
}

function startCar(car) {
  car.start();
}

startCar(new Ford());
startCar(new Honda());


