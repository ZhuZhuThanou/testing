const implementjs = require('implement-js')
const implement = implementjs.default

const { chai } = require('chai');

const Car = require('./Car');

describe('Car', () => {
  it('should do runtime type checking', () => {
      let dodge = {
        seats: 6,
        engine: 'V8 Hemi',
        go: () => { 'Varooom' }
      };
      implement(Car)(dodge);
  });
});