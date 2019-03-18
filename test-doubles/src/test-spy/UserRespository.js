class UserRepository {
  constructor(connection) {
    this.con = connection;
  }
  
  add(user) {
    this.con.invokeSql(`insert into user(firstName, lastName) value(${user.firstName}, ${user.lastName})`);
  }

  get(callback) {
    callback({firstName: 'Joe', lastName: 'Smith'});
  }
}

module.exports = UserRepository;