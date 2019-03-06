const UserDao = require('./UserDao');
const Connection = require('./Connection');

const chai = require('chai');
const { expect} = chai;
const sinon = require('sinon');

describe('UserDao', () => {
  let stub;
  const MOCK_QUERY_RESULT = 'sub query result';
  beforeEach(() => {
    //stub(obj, 'meth').callsFake(fn)
    stub = sinon.stub(Connection.getInstance(), 'query').callsFake((queryString) => {
      return MOCK_QUERY_RESULT;
    });
  });

  afterEach(() => {
    stub.restore();
  });

  it('invoke getUser', ()=> {    
    const userDao = new UserDao();
    const value = userDao.getUser('Id122');
    expect(value).to.equal(MOCK_QUERY_RESULT);
  });
});