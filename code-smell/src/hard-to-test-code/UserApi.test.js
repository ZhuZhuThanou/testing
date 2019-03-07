import UserApi from './UserApi';
import ConnectionSingleton  from '../apis/ConnectionSingleton';

const sinon = require('sinon');

describe('UserApi', () => {
  let stub;
  const MOCK_QUERY_RESULT = 'sub query result';
  beforeEach(() => {
    stub = sinon.stub(ConnectionSingleton.getInstance(), 'query').callsFake((queryString) => {
      return MOCK_QUERY_RESULT;
    });
  });

  afterEach(() => {
    stub.restore();
  });

  it('invoke getUser', ()=> {    
    const userDao = new UserApi();
    const value = userDao.getUser('Id122');
    expect(value).toEqual(MOCK_QUERY_RESULT);
  });
});