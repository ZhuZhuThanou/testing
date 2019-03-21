const implementjs = require('implement-js')
const implement = implementjs.default
const { Interface, type } = implementjs

const Car = Interface('Car')({
  seats: type('number'),
  engine: type('string'),
  go: type('function')
},{
  error: true,
  strict: true
});

module.exports = Car;