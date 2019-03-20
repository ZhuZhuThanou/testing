
class Palindrome {
  verify(input) {
    if (!input || input === '' || input.trim() === '') {
      return false;
    } else {
      let arrayInput = input.trim().split('');
      let halfwayPoint = Math.floor(arrayInput.length / 2);
      let leftHandSide = arrayInput.splice(0, halfwayPoint);
      let rightHandSide = arrayInput;
      if (rightHandSide.length > leftHandSide.length) {
        rightHandSide.shift(); // remove the first character
      }
      rightHandSide.reverse();
      return leftHandSide.toString() === rightHandSide.toString();
    }
  }
}

module.exports = Palindrome;