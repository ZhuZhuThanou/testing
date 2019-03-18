const { expect } = require('chai');
const sinon = require('sinon');

const DBConnection = require('./Connection');
const UserRespository = require('./UserRespository');

const sandbox = sinon.createSandbox();

describe('UserRepository', () => {
  let userRepo = null;
  let dbCon = null;

  beforeEach(() => {
    // fresh fixture
    dbCon = new DBConnection();
    userRepo = new UserRespository(dbCon);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('insert user to the respository', () => {
    
    // spying on the connection 
    let connectionSpy = sandbox.spy(dbCon, 'invokeSql');
    userRepo.add({firstName: "Homer", lastName: "Simpson"});
    expect(connectionSpy.callCount).to.equal(1);

  });

  it('get user from the repository', () => {
    // spy on a callback
    let callBackfunction = sandbox.spy();
    userRepo.get(callBackfunction);
    expect(callBackfunction.calledOnce);
  });

});