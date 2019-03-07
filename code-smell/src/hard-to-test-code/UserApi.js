import ConnectionSingleton from '../apis/ConnectionSingleton';

class UserApi {

  getUser(id) {
    return ConnectionSingleton.getInstance().query(id);
  }
}

export default UserApi;