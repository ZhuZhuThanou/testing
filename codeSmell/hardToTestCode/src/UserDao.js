const Connection = require('./Connection');

class UserDao {
  
  getUser(id) {
    return Connection.getInstance().query(id);
  }
}


module.exports = UserDao;