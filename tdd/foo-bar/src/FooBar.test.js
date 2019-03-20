const { expect } = require('chai');

const FooBar = require('./FooBar');

describe('Foo Bar TDD', () => {

  let fooBar = null;
  
  beforeEach(() => {
    fooBar = new FooBar();
  });

  it('return an empty string', () => {
    let value = fooBar.compute(1);
    expect(value).to.equal("");
  });

  it('return Foo string with input number 3', () => {
    let value = fooBar.compute(3);
    expect(value).to.equal("Foo");
  });

  it('return Foo string with input number 6', () => {
    let value = fooBar.compute(6);
    expect(value).to.equal("Foo")
  });

  it('return Bar string with input number 5', () => {
    let value = fooBar.compute(5);
    expect(value).to.equal('Bar');
  });

  it('return Bar string with input number 10', () => {
    let value = fooBar.compute(10);
    expect(value).to.equal('Bar');
  });
 
  it('return FooBar string with input number 15', () => {
    let value = fooBar.compute(15);
    expect(value).to.equal('FooBar');
  });

  it('return FooBar string with input number 30', () => {
    let value = fooBar.compute(30);
    expect(value).to.equal('FooBar');
  });

  it('return empty string with input number -1', () => {
    let value = fooBar.compute(-1);
    expect(value).to.equal('');
  });
});