

class FoodBaService {

  computeForFoo = (number) => {
    return number % 3 === 0 ? "Foo" : "";
  }

  computeForBar = (number) => {
    return number % 5 === 0 ? "Bar" : "";
  }

  compute = async (number) => {
    return Promise.resolve(`${this.computeForFoo(number)}${this.computeForBar(number)}`); 
  }
}

export default FoodBaService;