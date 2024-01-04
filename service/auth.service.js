const userDao = require("../dao/users.dao")
const bcrypt = require("bcryptjs");
class AuthService {
    async login(data) {
        try {
            const username = data.username;
            const password = data.password;
            const findUser = await userDao.findByUsername(username);

            if (findUser === null) {
                console.log('User not found');
                throw new Error('User not found');
            }

            const checkPassword = await bcrypt.compare(password, findUser.password);

            if (!checkPassword) {
                return 'false password';
            }

            return 'success';
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

}

module.exports = new AuthService()