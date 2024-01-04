const userDao = require("../dao/users.dao")
const bcrypt = require("bcryptjs");
class AuthService {
    async login(data) {
        const username = data.username
        const password = data.password
        const findUser = await userDao.findByUsername(username)
        if (findUser === null) {
            return 'user not found'
        }
        const checkPassword = await bcrypt.compare(password, findUser.password)
        if (!checkPassword) {
            return 'false password'
        }
        return 'success'
    }
}

module.exports = new AuthService()