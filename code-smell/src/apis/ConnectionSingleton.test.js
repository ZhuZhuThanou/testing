import ConnectionSingleton from './ConnectionSingleton';

describe('ConnectionSingleton', () =>{
  it('two instances should be the same', () => {
    expect(ConnectionSingleton.getInstance()).toBe(ConnectionSingleton.getInstance());
  });
});