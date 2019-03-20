import FooBar from './FooBarService';

describe('Foo Bar TDD', () => {

  let fooBar = null;
  
  beforeEach(() => {
    fooBar = new FooBar();
  });

  it('return an empty string', async () => {
    let result = await fooBar.compute(1);
    expect(result).toEqual("");
  });

  it('return Foo string with input number 3', async () => {
    let result = await fooBar.compute(3);
    expect(result).toEqual("Foo");
  });

  it('return Foo string with input number 6', async () => {
    let result = await fooBar.compute(6);
    expect(result).toEqual("Foo")
  });

  it('return Bar string with input number 5', async () => {
    let result = await fooBar.compute(5);
    expect(result).toEqual('Bar');
  });

  it('return Bar string with input number 10', async () => {
    let result = await fooBar.compute(10);
    expect(result).toEqual('Bar');
  });
 
  it('return FooBar string with input number 15', async () => {
    let result = await fooBar.compute(15);
    expect(result).toEqual('FooBar');
  });

  it('return FooBar string with input number 30', async () => {
    let result = await fooBar.compute(30);
    expect(result).toEqual('FooBar');
  });

  it('return empty string with input number -1', async () => {
    let result = await fooBar.compute(-1);
    expect(result).toEqual('');
  });
});