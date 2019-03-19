import ConnectionSingleton from '../apis/ConnectionSingleton';

class UserApi {
  getUser(id) {
    // using singleton
    return ConnectionSingleton.getInstance().query(id);
  }
}

export default UserApi;