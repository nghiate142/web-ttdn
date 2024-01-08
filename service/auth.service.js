const userDao = require("../dao/users.dao")
const bcrypt = require("bcryptjs");
class AuthService {
    async login(data) {
        const username = data.username;
        const password = data.password;
        const findUser = await userDao.findByUsername(username);
        if (findUser === null) {
            throw new Error('User not found');
        }
        const checkPassword = await bcrypt.compare(password, findUser.password);
        if (!checkPassword) {
            throw new Error('false password');
        }
        return findUser.dataValues;
    }

}

module.exports = new AuthService()