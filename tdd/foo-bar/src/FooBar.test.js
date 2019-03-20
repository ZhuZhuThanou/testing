const { expect } = require('chai');

const FooBar = require('./FooBar');

describe('Foo Bar TDD', () => {

  let fooBar = null;
  
  beforeEach(() => {
    fooBar = new FooBar();
  });

  it('return an empty string', () => {
    let result = fooBar.compute(1);
    expect(result).to.equal("");
  });

  it('return Foo string with input number 3', () => {
    let result = fooBar.compute(3);
    expect(result).to.equal("Foo");
  });

  it('return Foo string with input number 6', () => {
    let result = fooBar.compute(6);
    expect(result).to.equal("Foo")
  });

  it('return Bar string with input number 5', () => {
    let result = fooBar.compute(5);
    expect(result).to.equal('Bar');
  });

  it('return Bar string with input number 10', () => {
    let result = fooBar.compute(10);
    expect(result).to.equal('Bar');
  });
 
  it('return FooBar string with input number 15', () => {
    let result = fooBar.compute(15);
    expect(result).to.equal('FooBar');
  });

  it('return FooBar string with input number 30', () => {
    let result = fooBar.compute(30);
    expect(result).to.equal('FooBar');
  });

  it('return empty string with input number -1', () => {
    let result = fooBar.compute(-1);
    expect(result).to.equal('');
  });
});