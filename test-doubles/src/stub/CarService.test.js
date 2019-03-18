const { expect } = require('chai');
const sinon = require('sinon');
const sandbox = sinon.createSandbox();
const axios = require('axios');
const CarService = require('./CarService');

describe('CarService', () => {

  let carService = null;
  
  beforeEach(() => {
    carService = new CarService();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('save car information', () => {

    const stubBody = { make: 'GM', model: 'Yukon' }
    const resolved = new Promise((response) => { 
      return response({ data: {message: 'saved', id: 1}});
    });
    sandbox.stub(axios, 'post')
            .withArgs('/car', stubBody)
            .returns(resolved)

    return carService.save(stubBody)
      .then(response => {
        expect(response.id).to.equal(1);
        expect(response.message).to.equal('saved');
      });
  });
});