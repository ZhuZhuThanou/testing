

class FoodBar {

  computeForFoo(number) {
    return number % 3 === 0 ? "Foo" : "";
  }

  computeForBar(number) {
    return number % 5 === 0 ? "Bar" : "";
  }

  compute(number) {
    return `${this.computeForFoo(number)}${this.computeForBar(number)}`; 
  }
}

module.exports = FoodBar;