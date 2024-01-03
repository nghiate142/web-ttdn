const userDao = require("../dao/users.dao")
class AuthService {
    async login(data) {
        const username = data.username
        const password = data.password
        const findUser = await userDao.findByUsername(username)
        if (findUser === null) {
            return 'user not found'
        }
        console.log(findUser)
    }
}

module.exports = new AuthService()