const { expect } = require('chai');
const Palindrome = require('./Palindrome');

describe('Palindrome', () => {
  let palindrome = null;
  beforeEach(() => {
    palindrome = new Palindrome();
  }); 

  it('return false for null word', () => {
    let result = palindrome.verify(null);
    expect(result).to.be.false;
  });

  it('return false for an empty string input', () => {
   let result = palindrome.verify('');
   expect(result).to.be.false;
  });

  it('return true for a single character input', () => {
    let result = palindrome.verify('a');
    expect(result).to.be.true;
  });

  it('return true for two charcters of the same', () => {
    let result = palindrome.verify('bb');
    expect(result).to.be.true;
  });
  it('return false for two charcters not the same', () => {
    let result = palindrome.verify('ab');
    expect(result).to.be.false;
  });

  it('return true for three where left handside matches the right handside', () => {
    let result = palindrome.verify('aaabaaa');
    expect(result).to.be.true;
  });
  
  it('return false for word made up with spaces', () => {
    let result = palindrome.verify('         ');
    expect(result).to.be.false;
  });
});