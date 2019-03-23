import SecretConverter from './SecretConverter';

describe('SecreteConverter', () => {
  it('convert ', () => {
    let converter = new SecretConverter();
    let result = converter.createN5XProtocolKey('a', 'b');
    expect(result).toEqual(NaN);
  });
});