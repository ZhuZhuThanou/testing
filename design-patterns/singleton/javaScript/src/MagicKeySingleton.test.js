const chai = require('chai');
const { expect } = chai;

const ConnectionSingleton = require('./MagicKeySingleton');

describe('ConnectionSingleton', () =>{
  it('two instances should be the same', () => {
    expect(ConnectionSingleton.getInstance().getKey()).
        to.be.equal(ConnectionSingleton.getInstance().getKey());
  });
});