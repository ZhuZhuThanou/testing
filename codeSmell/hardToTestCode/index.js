const UserDao  = require('./src/UserDao');
console.log(UserDao);
const userDao = new UserDao();
userDao.getUser('Id122');
