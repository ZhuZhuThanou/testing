const UserDao = require('./UserDao');
const Connection = require('./Connection');

const chai = require('chai');
const { expect} = chai;
const sinon = require('sinon');

describe('UserDao', () => {
  it('run getUser should return a value', ()=> {
    let stub = sinon.stub();
    Connection.getInstance().query = stub;
    const userDao = new UserDao();
    userDao.getUser('Id122');
    console.log('after', stub.called);
    expect(stub.called).to.be.true;
  });
});